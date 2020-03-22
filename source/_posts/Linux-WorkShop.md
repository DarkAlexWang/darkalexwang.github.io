---
title: Linux WorkShop
date: 2014-05-30 14:17:50
tags: [Linux,Tech,WorkShop]
---

class: center, middle

# Introduction to Linux

![img](http://cynapse.com/wp-content/uploads/linux-powered_0.png)

---

class: middle

# What is Linux
- Free and Open Source computer Operating System
- First released in 1991 by Linus Torvalds
- Linus was 21 years old at the time
- Today, Linux is found everywhere!

---

class: center

# Linux on Devices

TVs | PCs | Tablets | Phones (since 2013)

![img](https://assets.ubuntu.com/sites/ubuntu/latest/u/img/devices/devices-family.png)

---
class: inverse, center, middle
## Why use Linux?
---
.left-column[
  ## Innovative
]
.right-column[
.center[**Package Managers** (since 1995)]

.center[![img](https://ryanlerch.fedorapeople.org/musique.png)]
]

---
.left-column[
  ## Innovative
]
.right-column[
.center[**Workspaces** (since 1998)]

.center[![img](http://core0.staticworld.net/images/article/2013/03/7-ubuntu-workspace-switcher-100028064-orig.png)]
]

---
.left-column[
  ## Innovative
]
.right-column[
.center[**Live CD** (free shipping since 2006)]

.center[![img](https://bitcoinpaperwallet.com/ubuntu-linux-live-bootable-cd/ubuntu-cd.jpg)]
]

---
.left-column[
  ## Innovative
]
.right-column[
.center[**Task Spread** (since 2013)]

.center[![img](http://itsfoss.com/wp-content/uploads/2014/10/Windows_Spread_Linux_Gnome.jpeg)]
]

---
.left-column[
  ## Innovative
]
.right-column[
.center[**Convergence** (since 2015)]

.center[![img](http://www.omgubuntu.co.uk/wp-content/uploads/2012/02/noname-11.jpg)]
]

---
.left-column[
  ## Innovative
  ## Adaptable
]
.right-column[
.center[**Firefox OS Phone**]

- Sold for $35 at launch
- Runs only a web renderer on the Linux kernel
- Feels fast, smooth, fluid
.center[![img](http://cdn.gsmarena.com/vv/newsimg/13/01/firefox-os-developer-phones/gsmarena_001.jpg)]
]
---
.left-column[
  ## Innovative
  ## Adaptable
]
.right-column[
.center[**Chrome OS**]
- First major OS to boot in under 2 seconds!
- Runs only a web renderer on the Linux kernel

.center[![img](http://image.slidesharecdn.com/chromeos-140711225857-phpapp01/95/chrome-os-the-stateless-operating-system-13-638.jpg?cb=1405119621)]
]

---
.left-column[
  ## Innovative
  ## Adaptable
  ## Productive
]
.right-column[
.center[**XMonad**]

.center[![img](https://wiki.haskell.org/wikiupload/a/aa/Screen-triplehead-galois.jpg)]
]

---
.left-column[
  ## Innovative
  ## Adaptable
  ## Productive
]
.right-column[
.center[**Containers**]

.center[![img](http://blog.leaseweb.com/uploads/2014/07/containers-vs-vms.jpg)]
]
---
.left-column[
  ## Innovative
  ## Adaptable
  ## Productive
]
.right-column[
.center[**Terminal**]

.center[![img](http://dotshare.it/public/images/uploads/40.png)]
]
---

class: inverse, center, middle

# Architecture

---

class: center

# Linux Architecture

.center[![img](http://www.tonypickett.com/wp-content/uploads/2013/09/arch_01.jpg)]

---

class: center

# Window Managers

.center[![img](http://downtoearthlinux.com/wp-content/uploads/2014/03/de-vs-wm.jpg)]

---
class: center

# File System Hierarchy

.center[![img](http://media.brajeshwar.com/i/technology/linux-file-tree.jpg)]

---

class: inverse, center, middle

# Basic Navigation

---

# The Shell

The shell prompt will appear when the shell is ready to accept input

```sh
[me@linuxbox /working/directory]$
```

- username@hostname
- followed by the current working directory
- followed by a `$` sign

Only the `$` sign is required for a shell.

Some shells ignore the username, hostname, and working directory.

---

# Essential commands

- `pwd` prints the current working directory
```bash
$ pwd
/home/siddhu
```

- `mkdir` makes a directory
```bash
$ mkdir testdir
```

- `cd` changes the current working directory
```bash
$ cd testdir
```

- `ls` lists the contents of a directory
```bash
$ ls /home/siddhu
testdir
```

---

# Essential commands

- `man` gives offline documentation for commands
```bash
$ man ls
```

- `cp` copies a file
```bash
$ cp source destination
```

- `rm` removes a file
```bash
$ rm file
```

- `mv` moves a file
```bash
$ mv source destination
```

---

# Essential commands

- `less` views a file, one screenful at a time
```bash
$ less file
```

- `cat` concatenates files
```bash
$ cat file1 file2 file3
```

- `nano` is used to edit a file
```bash
$ nano file
```

---

# Essential commands

- `tree` displays the directory tree after the current directory
```bash
$ tree
.
├── dir1
│   ├── file2
│   └── subdir
│       └── anotherfile
├── dir2
├── dir3
│   └── subdir
│       └── subsubdir
└── file
```
---

# Aliases

- `~` is an alias for the current users' home directory
- `#` instead of `$` as a prompt indicates superuser privileges
- `~username` refers to the home directory of username
- `.` refers to the current directory
- `..` refers to the parent directory

Path names may be absolute or relative.

- `cd /home/siddhu/mydir` uses an absolute path name
- `cd mydir` uses a relative path name
- `cd ../mydir` also uses a relative path name

When you use a relative path name without `.` or `..`, the shell replaces it
with an absolute path name:

`cd mydir` -> `cd $PWD/mydir`

`$PWD` is a special variable which holds the current working directory

---

# Cursor Movement

Basic movement:
- Up arrow goes to the previous command
- Down arrow goes to the next command
- Left/Right are used to jump characters backwards/forwards
- Ctrl+Left / Ctrl+Right are used to jump words backwards/forwards

Advanced movement (Emacs bindings):
- `Ctrl-p` goes to the previous command
- `Ctrl-n` goes to the next command
- `Ctrl-r` is used to search for a previous command
- `Ctrl-s` is used to search for a newer command
- `Ctrl-a` moves the cursor to the beginning of the line
- `Ctrl-e` moves the cursor to the end of the line
- `Ctrl-w` deletes a word backwards, while `Alt-w` deletes a line backwards
- `Ctrl-d` deletes a character forward, while `Alt-d` deletes a word forward
- `Ctrl-f` jumps a character forward, while `Alt-f` jumps a word forward
- `Ctrl-b` jumps a character backward, while `Alt-b` jumps a word backward

---

# Tab Completion

Typing out long path names can become tedious. Tab completion makes it a lot easier.

```bash
$ cd co<Tab>/l<Tab>/s<Tab>/com<Tab>
$ cd code/llvm/src/compiler
```

If multiple completions exist, tab completion won't succeed. Press tab twice in such scenarios' to view all possible completions.

Pro tip: Use ZSH instead of Bash for insane tab completions

```zsh
$ cd c/l/s/c<Tab>
$ cd code/llvm/src/compiler
```

---

class: inverse, center, middle

# UNIX

---

# Unix Philosophy

- Aims for minimalist, modular software development
- Write programs that do one thing and do it well
- Write programs to work together
- Write programs to handle text streams

```sh
$ cat localfile.txt | wc -l

44
```

```sh
$ curl http://www.tldp.org/LDP/sag/sag.txt | wc -l

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 43698    0 43698    0     0   148k      0 --:--:-- --:--:-- --:--:--  217k

7634
```

---

# Unix Philosophy

- We use pipes (the `|` character) to chain the output of one program as the input of another

.center[![img](https://camo.githubusercontent.com/2effeef4795b95295b726690bb0984df7d812fcd/68747470733a2f2f646f63732e676f6f676c652e636f6d2f64726177696e67732f642f3161444b397a716163677572465a537a6a704c4d5653676f64306a462d4b4648576553565f53554c387668452f7075623f773d39313626616d703b683d333534)]

---

# Unix Philosophy

Everything is a file.

- A text file is a file
- A binary file is a file
- A directory is a file
- The keyboard is a file
- The monitor is a file
- All I/O devices are files

Files don't need extensions. File types are determined using MIME types. MIME types are embedded in the file header (inode to be precise).

Some common extensions and their corresponding MIME types are listed below:

```sh
.txt  – text/plain
.html – text/html
.mp3  – audio/mpeg3
.png  – image/png
.doc  – application/msword
```

---

# Unix Philosophy

Understanding the Unix Philosophy is key to effectively using the terminal. Consider the two equivalent ways of viewing a file with less.

```sh
$ less file
$ cat file | less
```

To understand the what's going on, consider the following:
- I/O is a file
- stdin, stdout, and stderr are files
- stdout of one program can be piped to stdin of another program using `|`

---

# Understanding Filesystems

> *Have you noticed that directories take up 4096 bytes of memory?*

Files on a Linux system have an inode table. The inode table consists of:
- file size
- ids
- file mode
- timestamps
- symbolic link count
- pointers to the disk

A directory is just a special file containing the inode numbers of the files
inside it as an array. The size of this array is usually less 4096 bytes.

Filesystems in Linux are usually block aligned. 4096 bytes is a common block
size, and since the directory size is less than 4096 bytes, it's aligned at
the 4096 byte boundary, making it's size 4096 bytes.

---

# Understanding Filesystems

Multiple pointers to the inode number may exist. These pointers are
called hard links. All hard links are equivalent.

The alternative, is to have symbolic links, which point to the original
file path, and not the inode number itself.

.center[![img](http://deano.me/wp-content/uploads/2014/12/HardVsSymbolicLInks.png)]

---

class: inverse, center, middle

# Unix Patterns

---

# Wildcards

Wildcards are patterns for searching files

- `*` represents zero or more characters
- `?` represents a single character
- `[]` represents a range of characters

```bash
$ ls
blue blah blarg bar baz file example new.txt old.txt foo1 foo2 foo3

$ ls b*
blue blah blarg bar baz

$ ls ba?
bar baz

$ ls *.txt
new.txt old.txt

$ ls *[0-9]*
foo1 foo2 foo3
```

Under the hood, the shell auto completes wildcards before executing the command.

---

# Permissions

Linux has 3 permissions:
- r - read (view the file)
- w - write (edit the file)
- x - execute (run the file)

The permissions are granted for 3 groups:
- u - owner - person who owns the file (usually the person who created it)
- g - group - accessible to everyone in the group
- o - others - accessible to everyone

---

# Permissions

Use `ls -l` to view the permissions on a file:

```bash
$ touch file && mkdir dir
$ ls -l
-rw-rw-r-- 1 siddhu siddhu    0 May 13 02:03 file
drwxrwxr-x 2 siddhu siddhu 4096 May 13 02:04 dir
```

The format is:

```sh
  d         r w x   r w x   r w x

  ^          ^        ^       ^
  |          |        |       |
directory   owner    group   others
```

- A dash (`-`) indicates the absense of that field
- `rwx` indicates read/write/execute privilege on the file

---

# Permissions

Use `chmod` to alter the permissions of a file:

```bash
$ touch file
$ chmod g+w file # Give (+) group (g) write (w) privilege
$ chmod o-r file # Revoke (-) read (r) privilege from others (o)
$ chmod a-x file # Revoke execute (x) privilege from all groups (a)
$ chmod u+r file # Give read privilege to owner (u)
```

To set rwx permissions of all groups simultaneously, use binary representation:

```bash
$ chmod 754 file # 7 5 4 = 111 101 100 = rwx r-x r--
```

---

# Piping

- `|` feeds the output of one command, as the input of the next
- `>` writes the stdout of one command to a file
- `>>` appends the stdout of one command to a file
- `2>` writes the stderr of one command to a file

---

# Processes

Threads:
- The number of threads is limited by the hardware
- The kernel can use special threads called kernel threads
- Kernel threads run on top of hardware threads
- POSIX allows multiple p-threads to run on a single thread
- pthreads run on top of kernel threads, they add an address space
- Userspace threads are called green threads
- Compilers may allow multiple green threads to run on a single p-thread

Processes:
- A process is a program which may use one or more threads
- Processes are expensive, and should not be spawned unnecessarily
- Processes are isolated by process isolation
- Processes communicate using inter-process communication

---

# Processes

Threads may run in userspace, or kernel space

.center[![img](http://image.slidesharecdn.com/scheduleractivations-effectivekernelsupportfortheuser-levelmanagementofparallelism-110803044850-phpapp02/95/scheduler-activations-effective-kernel-support-for-the-userlevel-management-of-parallelism-6-728.jpg?cb=1312714637)]

---

# Processes

The OS manages theads, offloading to different hardware using different techniques.
You can help the OS by specifying your execution model as a programmer.

.center[![img](https://www.pgroup.com/images/insider/v2n4a1i2.png)]

---

# Processes

You can view running process using `top`

```bash
$ top
Tasks: 174 total, 3 running, 171 sleeping, 0 stopped
KiB Mem: 4050604 total, 3114428 used, 936176 free
Kib Swap: 2104476 total, 18132 used, 2086344 free
 
 PID USER %CPU %MEM COMMAND
6978 ryan 3.0  21.2 firefox
  11 root 0.3   0.0 rcu_preempt
6601 ryan 2.0   2.4 kwin
...
```

If you want to output process info to stdout, use `ps [aux]`.
It gives a lot of output, so we use grep to filter the results.

---

# Processes

To kill an existing process, use `kill [signal] <PID>`

If kill doesn't destroy the process by itself, you can pass the
signal `-9` which destroys the process at the kernel level.

```bash
$ ps aux | grep 'firefox'
ryan 6978 8.8 23.5 2344096 945452 ? Sl 08:03 49:53 /usr/lib64/firefox/firefox

$ kill 6978

$ ps aux | grep 'firefox'
ryan 6978 8.8 23.5 2344096 945452 ? Sl 08:03 49:53 /usr/lib64/firefox/firefox

$ kill -9 6978

$ ps aux | grep 'firefox'

$
```

---

# Processes

A process can run as a foreground or background job.

To list the current background jobs, use the `jobs` command. Pressing `Ctrl-Z`
while running a program sends it to the background. To bring a job back to the
foreground, use `fg <job-number>`

```bash
$ sleep 15 &
[1] 21637

$ sleep 10
# (you press CTRL + z, notice the prompt comes back.)

$ jobs
[1]- Running sleep 15 &
[2]+ Stopped sleep 10

$ fg 2
[1] Done sleep 15
```

---

class: inverse, center, middle

# Filters

---

# cat

cat is used for concatenating files, but abused for printing files to stdout.

```bash
$ cat sample
Fred apples 20
Susy oranges 5
Mark watermellons 12
Robert pears 4
Terry oranges 9
Lisa peaches 7
Susy oranges 12
Mark grapes 39
Anne mangoes 7
Greg pineapples 3
Oliver rockmellons 2
Betty limes 14
Julie bananas 30
```

---

# head

head prints out the first n lines of it's input. If no value for n is given, it
defaults to printing 10 lines.

`head -n file`

```bash
$ head sample
Fred apples 20
Susy oranges 5
Mark watermellons 12
Robert pears 4
Terry oranges 9
Lisa peaches 7
Susy oranges 12
Mark grapes 39
Anne mangoes 7
Greg pineapples 3

$ head -3 sample
Fred apples 20
Susy oranges 5
Mark watermellons 12
```

---

# tail

tail prints out the last n lines of it's input. If no value for n is given, it
defaults to printing 10 lines.

`tail -n file`

```bash
$ tail sample
obert pears 4
Terry oranges 9
Lisa peaches 7
Susy oranges 12
Mark grapes 39
Anne mangoes 7
Greg pineapples 3
Oliver rockmellons 2
Betty limes 14
Julie bananas 30

$ tail -3 sample
Oliver rockmellons 2
Betty limes 14
Julie bananas 30
```

---

# sort

sort is a utility to sort the input alphabetically (though, other sorting
mechanisms are available)

`sort -options file`

```bash
$ sort sample
Anne mangoes 7
Betty limes 14
Fred apples 20
Greg pineapples 3
Julie bananas 30
Lisa peaches 7
Mark grapes 39
Mark watermellons 12
Oliver rockmellons 2
Robert pears 4
Susy oranges 12
Susy oranges 5
Terry oranges 9
```

---

# nl

nl numbers the lines in the input

`nl -options file`

```bash
$ nl -w 1 -s '. ' sample
1. Fred apples 20
2. Susy oranges 5
3. Mark watermellons 12
4. Robert pears 4
5. Terry oranges 9
6. Lisa peaches 7
7. Susy oranges 12
8. Mark grapes 39
9. Anne mangoes 7
10. Greg pineapples 3
11. Oliver rockmellons 2
12. Betty limes 14
13. Julie bananas 30
```

---

# wc

wc counts the number of words (or lines/characters) in the input

`wc -options file`

```bash
$ wc sample # returns lines, words, characters, filename
 13  39 214 sample

$ wc -l sample # returns lines, filename
  13 sample

$ wc -w sample # returns words, filename
  39 sample

$ wc -lc sample # returns lines, characters, filename
  13 214 sample
```

---

# cut

cut is a neat utility for grabbing cloumns from a file

`cut -options path`

```bash
$ cut -f 1,3 -d ' ' sample 
Fred 20
Susy 5
Mark 12
Robert 4
Terry 9
Lisa 7
Susy 12
Mark 39
Anne 7
Greg 3
Oliver 2
Betty 14
Julie 30
```

Common options:
- `-f` for fields
- `-d` for delimiters

---

# sed

sed is a stream editor, which should be used to search and replace text

`sed <expression> file`

```bash
$ sed 's/oranges/bananas/g' sample
Fred apples 20
Susy bananas 5
Mark watermellons 12
Robert pears 4
Terry bananas 9
Lisa peaches 7
Susy bananas 12
Mark grapes 39
Anne mangoes 7
Greg pineapples 3
Oliver rockmellons 2
Betty limes 14
Julie bananas 30
```

---

# awk

awk is a programming language for text manipulation

```bash
$ awk '{print $3}' sample 
20
5
12
4
9
7
12
39
7
3
2
14
30
```

Common options:
- `$n` grabs the n-th column
- `-F` sets the field separator

---

# uniq

uniq removes duplicates from data

`uniq  [options] file`

```bash
$ cat file
Hello World
Hello World
Then end

$ uniq file
Hello World
Then end
```

---

# tac

`tac` is just cat in reverse. It prints the last line first, and first line last.

`tac file`

```bash
$ tac sample
Julie bananas 30
Betty limes 14
Oliver rockmellons 2
Greg pineapples 3
Anne mangoes 7
Mark grapes 39
Susy oranges 12
Lisa peaches 7
Terry oranges 9
Robert pears 4
Mark watermellons 12
Susy oranges 5
Fred apples 20
```

---

class: inverse, center, middle

# Scripting

---

# Scripting

A script is a document containing actions the shell can perform.

Scripts are typically written using `sh`, but recently `python`
has been replacing shell scripts.

```bash
#!/bin/bash
# declare STRING variable
STRING="Hello World"
# print variable on a screen
echo $STRING
```

```python
#!/bin/python
# declare STRING variable
STRING="Hello World"
# print variable on a screen
print STRING
```

Set execute privileges before running:

```bash
$ chmod +x hello_world
$ ./hello_world
Hello World
```

---

class: inverse, center, middle

# Development Environments

---

# Isolated Development Environments

Inspired by functional programming, isolated development environments
prevent mutating the global system by creating isolated containers/shells.

Why?
- Packages are installed in multiple locations (`/bin`, `/sbin`, `/usr/bin`, etc.)
- Upgrading a package is dangerous
- Upgrades are not atomic
- Hard to install multiple versions of packages
- No rollbacks
- Difficult to understand dependencies
- Incomplete dependencies
- Root privileges required

---

# Docker

Docker is a platform for building applications.

```docker
FROM ubuntu
MAINTAINER Siddhanathan Shanmugam

RUN apt-get update

# Servo requirements
RUN apt-get install -y \
  curl freeglut3-dev \
  libfreetype6-dev libgl1-mesa-dri libglib2.0-dev xorg-dev \
  gperf g++ cmake python-virtualenv python-pip \
  libssl-dev libbz2-dev libosmesa6-dev libxmu6 libxmu-dev libglu1-mesa-dev

# Useful tools
RUN apt-get install -y sudo git python-dev vim

RUN useradd -m -d /home/servo -s /bin/bash servo
RUN echo "servo ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/servo \
  && chmod 0440 /etc/sudoers.d/servo
ENV HOME /home/servo
WORKDIR /home/servo
USER servo
```

---

# Docker

You can build projects in an isolated container:

```bash
$ docker build -t siddhu/servo .
$ docker run --rm -i -t siddhu/servo /bin/bash

docker$ # run any commands you need
```

Good for software development since you know exactly what your dependencies are.
It doesn't affect the global system at all.

It's especially useful for developing Linux applications on Mac OS X, or Windows.

---

# Nix

Nix is a purely functional package manager. Nix allows creating isolated
development environments almost instantaneously.

```bash
$ nix-shell -p cowsay

nix-shell$ cowsay hi!
 _____ 
< hi! >
 ----- 
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

Nix shell packages are temporary, and can be deleted using:

```bash
$ nix-collect-garbage -d
```

This is super useful when you only temporarily want a package.

---

# Nix

You can also write `shell.nix` files for your applications:

```nix
with import <nixpkgs> {}; {
    sdlEnv = stdenv.mkDerivation {
        name = "sdl";
        buildInputs = [ stdenv SDL SDL_image SDL_ttf SDL_gfx cmake SDL_net ];
    };
}
```

Simply cd into the directory containing `shell.nix` and type `nix-shell` to
enter the development environment.

Unlike Docker, Nix does not provide an isolated container. It only installs
dependencies without polluting the global system.

---

# Nix

Installing multiple versions of packages with Nix is easy:

```bash
$ nix-shell -p haskell.packages.ghc784.ghc

$ nix-shell -p haskell.packages.ghc7103.ghc
```

---

class: inverse, center, middle

# Finding

---

# Regular Expressions

Regular expressions (regex) allow us to specify patterns

- `.` (dot) - a single character.
- `?` - the preceding character matches 0 or 1 times only.
- `*` - the preceding character matches 0 or more times.
- `+` - the preceding character matches 1 or more times.
- `{n}` - the preceding character matches exactly n times.
- `{n,m}` - the preceding character matches at least n times and not more than m times.
- `[agd]` - the character is one of those included within the square brackets.
- `[^agd]` - the character is not one of those included within the square brackets.
- `[c-f]` - the dash within the square brackets operates as a range. In this case it means either the letters c, d, e or f.
- `()` - allows us to group several characters to behave as one.
- `|` (pipe symbol) - the logical OR operation.
- `^` - matches the beginning of the line.
- `$` - matches the end of the line.

---

# Regular Expressions

eGrep finds matches based on regex's and prints them

```bash
$ egrep 'mellons' sample # find mellons
Mark watermellons 12
Oliver rockmellons 2

$ egrep -n 'mellons' sample # display line numbers of matches
3:Mark watermellons 12
11:Oliver rockmellons 2

$ egrep -c 'mellons' sample # display only number of occurances
2

$ egrep '^[A-K]' sample # find any name that begins with A-K
Fred apples 20
Anne mangoes 7
Greg pineapples 3
Betty limes 14
Julie bananas 30
```

---

class: inverse, center, middle

# Makefiles

---

# Makefiles

- Make your life easier
- Automate tasks
- Use their own specification language
- Flexible rules
- Imperative for distribution

---

# Makefiles

<u>Makefile</u>:
```Makefile
CC           = gcc
CFLAGS       = -std=c89 -Wpedantic -Wall
DEBUG        = -ggdb
GRAPHITEOPTS = -ftree-vectorize -floop-interchange
CFLAGS       += -march=native -mtune=native -Ofast ${GRAPHITEOPTS}
LDFLAGS      = -s ${LIBS} ${CFLAGS}
SOURCES      = source.c another.c
TARGETS      = ${SOURCES:.c=}


all: $(TARGETS)

%.o: %.c
    @$(CC) -c $(CFLAGS) $(LDFLAGS) $<

clean:
    rm *.o $(TARGETS)
```

`gcc -o outfile infile` ⇒ `make infile`

---

# Makefiles
## Common targets
<style>
</style>
<table cellpadding="5px">
    <tr><td class="cell-target"><code>all:</code></td>
        <td>
            This target is mandatory. It runs by default if nothing is supplied
            after <code>$ make</code> and usually compiles the main program.
        </td>
    </tr>
    <tr>
        <td class="cell-target"><code>clean:</code></td>
        <td>
            This target generally cleans all generated files so that the
            working directory may return to its original state, barring
            modified files.
        </td>
    </tr>
    <tr>
        <td class="cell-target"><code>install:</code></td>
        <td>
            This target moves compiled files to their respective directories
            within the filesystem tree. It triggers compilation if necessary.
        </td>
    </tr>
    <tr>
</table>

---

# Kernel Drivers

- Built-in vs. modular
    - File system drivers?
    - Webcam drivers?
- Not executable
- May use kernel data structures
- Parameters
- Licensing

---

# Kernel Drivers

## Commands to interact with modules
<table cellpadding="5px">
    <tr><td class="cell-target"><code>modprobe <modulename></code></td>
        <td>
            Loads a kernel module.
        </td>
    </tr>
    <tr>
        <td class="cell-target"><code>rmmod <modulename></code></td>
        <td>
            Removes a module from the kernel.
        </td>
    </tr>
    <tr>
        <td class="cell-target"><code>lsmod</code></td>
        <td>
            Displays a listing of kernel modules.
        </td>
    </tr>
    <tr>
        <td class="cell-target"><code>modinfo <modname></code></td>
        <td>
            Displays information about a kernel module.<br/>
        </td>
    </tr>
</table>
```shell
$ modinfo iwlwifi | grep -E "filename|author|description|license"
filename:       /lib/modules/4.4.1gentoosamus/kernel/drivers/net/
                wireless/iwlwifi/iwlwifi.ko
license:        GPL
author:         Copyright(c) 2003- 2015 Intel Corporation
                <ilw@linux.intel.com>
description:    Intel(R) Wireless WiFi driver for Linux
```

---

class: inverse, center, middle

# Version Control

---

# Git

A version control system maintains a database containing different
versions of the file. Useful for seeing what changed, and rolling
back to older revisions.

.right-column[![img](https://git-scm.com/book/en/v2/book/01-introduction/images/local.png)]

---

class: inverse, center, middle

# Advanced Navigation

---

# Being more productive

.center[![img](http://i.kinja-img.com/gawker-media/image/upload/vkadegotlwqvivpppfb5.png)]

---

# Special Variables

- `$1, $2, $3, ...` are the positional parameters.
- `"$@"` is an array-like construct of all positional parameters, {$1, $2, $3 ...}.
- `"$*"` is the IFS expansion of all positional parameters, $1 $2 $3 ....
- `$#` is the number of positional parameters.
- `$-` current options set for the shell.
- `$$` pid of the current shell (not subshell).
- `$_` most recent parameter (or the abs path of the command to start the current shell immediately after startup).
- `$IFS` is the (input) field separator.
- `$?` is the most recent foreground pipeline exit status.
- `$!` is the PID of the most recent background command.
- `$0` is the name of the shell or shell script.

---

# History Completion

- `!!` executes the previous command

```bash
$ echo "Hello, World"
Hello, World

$ !!
echo "Hello, World"
Hello, World

$ 
```

---

# History Completion

- `!-n` executes the n-th previous command

```bash
$ echo "World 1"
World 1

$ echo "World 2"
World 2

$ echo "World 3"
World 3

$ echo "World 4"
World 4

$ !-3
echo "World 2"
World 2

$ 
```

---

# History Completion

- `!programName` executes the previous command that starts with programName

```bash
$ ps | grep zsh
28618 pts/1    00:00:00 zsh

$ echo "Hello, World"

$ !ps
ps | grep zsh
28618 pts/1    00:00:00 zsh

$
```

---

# History Completion

- `!?text` executes the previous command that contains the string text

```bash
$ ls /etc/cron.daily/passwd 
/etc/cron.daily/passwd

$ echo "Hello, World"
Hello, World

$ !?cron
ls /etc/cron.daily/passwd 
/etc/cron.daily/passwd

$ 
```

---

# History Completion

- `^str1^str2^` replaces the string str1 in the previous command with str2

```bash
$ ls -l /etc/cron.daily/passwd 
-rwxr-xr-x 1 root root 249 Feb 16  2014 /etc/cron.daily/passwd

$ !!:s/ls -l/cat/
cat /etc/cron.daily/passwd 
#!/bin/sh
cd /var/backups || exit 0

$ echo "Hello, World"
Hello, World

$ ^ls -l^cat^
cat /etc/cron.daily/passwd 
#!/bin/sh
cd /var/backups || exit 0

$ 
```

---

# History Completion

- `:^` gets the first argument of a command
- `:$` gets the last argument of a command
- `:n` gets the n-th argument of a command
- `:*` gets all arguments of a command
- `:x-y` gets a range of arguments

```bash
$ mkdir ~/backup

$ cp /etc/passwd ~/backup/

$ ls -l !cp:^
ls -l /etc/passwd
-rw-r--r-- 1 root root 2001 Mar  1 13:38 /etc/passwd

$ ls -l !cp:$
ls -l ~/backup/
total 4
-rw-r--r-- 1 siddhu siddhu 2001 May 12 23:00 passwd

$ ls -l !cp:2
ls -l ~/backup/
total 4
-rw-r--r-- 1 siddhu siddhu 2001 May 12 23:00 passwd

$ 
```

---

# History Completion

- `!%` gets the last searched command

```bash
$ /usr/local/apache2/bin/apachectl restart

$ !?apache
/usr/local/apache2/bin/apachectl restart

$ !% stop
/usr/local/apache2/bin/apachectl stop
```

---

# History Completion

- `:p` completes the command without executing it

```bash
$ tar cvf old.tar a b c d

$ tar cvfz new.tar !tar:3-:p
tar cvfz new.tar a b c
```

---

# Removing Path Names

- `:h` removes trailing path names
- `:t` removes leading path names
- `:r` removes the file extension

```bash
$ ls -l code/test/llvm/Main.hs
-rw-rw-r-- 1 siddhu siddhu 463 Feb 24 22:33 code/test/llvm/Main.hs

$ ls -l !!:$:h
ls -l code/test/llvm
total 20
-rw-rw-r-- 1 siddhu siddhu  908 Feb 24 22:28 Lexer.hs
-rw-rw-r-- 1 siddhu siddhu  463 Feb 24 22:33 Main.hs
-rw-rw-r-- 1 siddhu siddhu 1763 Feb 24 22:30 Parser.hs
-rw-rw-r-- 1 siddhu siddhu  348 Feb 24 22:33 shell.nix
-rw-rw-r-- 1 siddhu siddhu  284 Feb 24 22:30 Syntax.hs

$ ls -l !-2:$:t
ls -l Main.hs
-rw-rw-r-- 1 siddhu siddhu 463 Feb 24 22:40 Main.hs

$ ls -l !-3:$:r
ls -l code/test/llvm/Main
-rw-rw-r-- 1 siddhu siddhu 463 Feb 24 22:55 Main
```

---

class: inverse, center, middle

# The End
## (interactive tutorials?)

        
