---
title: Meep and python-meep on MacOS
date: 2016-10-06 12:22:56
categories:
tags: [Meep, Tech, Python]
---

# Meep and python-meep on MacOS
This is a compilation procedure that worked for me to setup the python-meep with some utilities on a MacOS-based system.
Last update: 12/15/2016
## Note

I created this recipe for a general guide line to install meep and python-meep on MacOS based system. Currently I installed on MacOS Sierra, and meep or meep-mpi does not working correctly, make check failed symmetry test which is failing due to a small numerical error (I guess this is fine). The error message that I have is posted as an issue in [meep Github repo](https://github.com/stevengj/meep/issues/33). It seems like due to guile library, please let me know if you have any suggestion, I would really appreciate.
This is the error message I have when running examples of meep scripts:

```
ERROR: In procedure memoize-variable-access!:
ERROR: Unbound variable: Ez
```

Python-meep seems working correctly with the given sample examples.

Please take your own resposibility when you follow this recipe.

I followed [Glenn's post](https://www.mail-archive.com/meep-discuss@ab-initio.mit.edu/msg05292.html) on Meep-discuss and made some modification when necessery.

1. First, install Xcode from the App Store and command line tools using the terminal:
```
xcode-select --install
```
2. Next, install home-brew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor
brew update
```
3. Install packages needed to build meep:
```
brew install guile
brew install --with-mpi homebrew/science/hdf5
brew install homebrew/science/openblas fftw h5utils
brew install pkg-config
brew install swig
brew install automake
brew install autoconf
```

4. Log in as a user with admin privileges.

5. Download harminv library from [ab-initio:](http://ab-initio.mit.edu/harminv/harminv-1.4.tar.gz)  Unpack that, cd into harminv-1.4 and do the usual
```
./configure
make
sudo make install
```

6. Download libctl library from [ab-initio:](http://ab-initio.mit.edu/libctl/libctl-3.2.2.tar.gz) Unpack that, cd into libctl-3.2.2 and do the usual
```
./configure
make
sudo make install
```

7. Get meep from github:
```
git clone https://github.com/stevengj/meep
```

8. In the cloned code (on 2/1/15), some files needed to be modified to get swig to work properly. Specifically, the cloned libctl/Makefile.am caused broken libctl/meep_swig_bug_workaround.i, libctl/meep_enum_renames.i and libctl/meep_renames.i to be created. To fix that I modified two lines in libctl/Makefile.am:
```
	the line after “meep_swig_bug_workaround.i: $(LIBHDRS)” was changed from
	-> (echo "// AUTOMATICALLY GENERATED -- DO NOT EDIT"; grep -h friend $(LIBHDRS) | sed 's/^ *friend \+[A-Za-z_0-9:<>]\+[* ]\+\([A-Za-z_0-9:]*\) *(.*$$/%ignore \1;/' | grep "%ignore" | sort -u;) > $@
	to
	-> (echo "// AUTOMATICALLY GENERATED -- DO NOT EDIT"; grep -h friend $(LIBHDRS) | sed 's/^ *friend  *[[:alpha:]_][[:alnum:]_]* *\([[:alpha:]_][[:alnum:]_]*\) *(.*/%ignore \1;/' | grep "%ignore" | sort -u;) > $@
	the line after “meep_enum_renames.i: $(LIBHDRS)” was changed from
	-> (echo "// AUTOMATICALLY GENERATED -- DO NOT EDIT"; for f in $(LIBHDRS); do egrep "^enum" $$f | sed 's/enum \+\([A-Za-z_0-9:]\+\).*$$/\1/g' | while read enum; do cat $$f | tr -d '\n' | sed 's/.*enum \+'$${enum}' *{\([^}]*\)}.*/\1/g' | sed 's/= *[0-9]\+//g' |tr -d ' \t' | tr ',' '\n' | sed  's/^.*$$/'"%rename(meep_$${enum}_\0) meep::\0;/g"; echo; done; done;) > $@
	to
	-> (echo "// AUTOMATICALLY GENERATED -- DO NOT EDIT";for f in $(LIBHDRS); do egrep "^enum" $$f | sed 's/enum  *\([^}][^}]*\).*};/\1/g' | tr -d "{" | sed 's/, */ /g' | sed 's/ *= *[[:digit:]][[:digit:]]*//g'| while read -a array; do varname=$${array[0]};unset "array[0]";for varvalue in $${array[@]};do echo "%rename(meep_$${varname}_$$varvalue) meep::$$varvalue;"; done;done;done;) > $@
```
That resulted in good libctl/meep_swig_bug_workaround.i and libctl/meep_enum_renames.i when make was run, but to fix libctl/meep_renames.i, I punted and just copied that file over from a meep 1.2.1 distribution.

9. For the instructions that follow, I used this [guide](http://www.fzu.cz/~dominecf/meep/index.html) as a guide and made modifications to get things to work on OS-X.

cd into meep and execute
```
			export eFLAGS=" -fPIC"; export CXXFLAGS=" -fPIC"; export FFLAGS="-fPIC"
			export CPPFLAGS="-I/usr/local/include"
			export LD_RUN_PATH="/usr/local/lib"
			./autogen.sh --with-mpi --enable-maintainer-mode --enable-shared --prefix=/usr/local
			make  &&  sudo make install
```

10. That should take care of the basic meep, but I find it much more convenient to deal with Python than Scheme, so I installed python-meep, which started with a [download](https://launchpad.net/python-meep/1.4/1.4/+download/python-meep-1.4.2.tar).The resulting files seemed to require some modification to install in /usr/local directories and to work properly:
```
			in setup-mpi.py inserted after line 9: import numpy as np
			in setup-mpi.py changed the last line to:
include_dirs=includeDir+[np.get_include()]
			in setup-mpi.py changed line 16 to: includeDir = ["/usr/local/include”]
			in setup-mpi.py changed line 17 to: includeDir = ["/usr/local/lib”]
			in make-mpi inserted after line 5: export LD_RUN_PATH=/usr/local/lib
			in meep_mpi.py changed line 4918 to: libmpi = CDLL('libmpi.0.dylib’,
RTLD_GLOBAL)
			in meep_mpi.py changed line 4921 to: libmpi = CDLL('libmpi.dylib’,
RTLD_GLOBAL)
			in meep-site-init.py replaced the # in the first line with //

With those modifications, the installation can proceed:
			cd to python-meep directory
			as a user with admin privileges execute: sudo ./make-mpi -I/usr/local/include -L/usr/local/lib
```
11. I find out that python-meep cant read the right libmpi library for file
   meep-mpi.py that generated.
In order to fix this, you need to modify the /usr/local/bin/meep-mpi.py
from
```
    try:
        libmpi = CDLL('libmpi.so.0', RTLD_GLOBAL)
    except:
        try:
        libmpi = CDLL('libmpi.so', RTLD_GLOBAL)
        except Exception,e:
        print "Neither libmpi.so.0 nor libmpi.so found. Fatal error."
        raise e

```
to
```
import sys
if sys.platform == 'darwin': # works on OSX
    try:
        libmpi = CDLL('libmpi.0.dylib', RTLD_GLOBAL)
    except:
        try:
        libmpi = CDLL('libmpi.dylib', RTLD_GLOBAL)
        except Exception,e:
        print "Neither libmpi.0.dylib nor libmpi.dylib found. Fatal error."
        raise e
else:
    try:
        libmpi = CDLL('libmpi.so.0', RTLD_GLOBAL)
    except:
        try:
        libmpi = CDLL('libmpi.so', RTLD_GLOBAL)
        except Exception,e:
        print "Neither libmpi.so.0 nor libmpi.so found. Fatal error."
        raise e
```
12. If no errors or omissions have slipped by me, that should get python-meep running on OS-X.
