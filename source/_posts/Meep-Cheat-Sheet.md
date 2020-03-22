---
title: Meep Cheat Sheet
date: 2017-01-11 10:17:06
categories:
tags: [Meep, Tech, H5topng]
---
Original Post from [Yasser's Page](https://www.ocf.berkeley.edu/~ykhan/meep-cheat-sheet/)
# Running Parallel Meep:
mpirun -np 16 meep-mpi splitter.ctl > splitter.out
; runs meep-mpi in 16 processors [input.ctl > output.out]

# Running Serial Meep:
meep znonw_glass.ctl >& znonw_glass.out

# Exporting Image with Epsilon Overlay
h5topng -S4 -Zc dkbluered -a gray:0.5 -A eps-000000.00.h5 ez*.h5
; scales 4 times used dkblured color scheme, places overlay gray with 50% opacity

# Exporting 330 images:
h5topng -t 0:329 -R -Zc dkbluered -a yarg -A trans-eps-000000.00.h5 trans-ez.h5

# Exporting 2D slices from 3D Structure
h5topng -S4 -0 -x 0 eps-000000.00.h5 ; yz plane
h5topng -S4 -0 -z 0 eps-000000.00.h5 ; xy plane

# At every .6 outputs pngs
(run-until 200 (at-every 0.6 (output-png Ez “-Zc bluered”)))

# Using grep to get flux data out
grep flux1: ito1_glass.out > ito1_glass.dat

# Export vtk files
h5tovtk -t 150 -o test.vtk -d ey test-e.h5

# Creating movie from bunch of .png files
mencoder mf://*.png -mf w=800:h=600:fps=4:type=png -ovc copy -oac copy -o output.avi
; you will need mencoder [sudo apt-get install mencoder]
