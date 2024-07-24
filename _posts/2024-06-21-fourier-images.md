---
title: "The 2D Fourier Analysis"
date: 2024-05-04
header:
  image: /assets/images/fourier-analysis-post-wallpaper.jpg
categories:
  - computer vision
tags:
  - fourier analysis
  - dsp
  - image processing
author_profile: false
toc: true
---

Today we'll see how a simple approach like the 2D image analysis via Fourier would allows us to discover a lot of information about images.



# Introduction
Fourier transformation are a powerful tools that allows us to write a function in its frequency domain as a sum of a number of sinusoids. Its application domain spans along every engineering and science field. Guess what, Computer Vision is one of the fields in which Fourier Analysis is really helpful.

For example whan dealing with noisy images, or when you need to discover patterns inside an image. We'll see some of such applications.




# Pills of background
The Fourier transform in one dimension is defined as follows: let f(x) be a signal belonging to $\mathbf{R}$

$$
\begin{aligned}
    F(\omega)&=\int_{-\infty}^{+\infty}f(x)\,e^{-i\omega x}dx\\
    &=R(\omega)+iI(\omega)
\end{aligned}
$$

that can be easily rewritten using the Euler Formula. There exists also the inverse mapping, the so called 'Fourier antitransform' (or Inverse Fourier transform)

$$
f(x)=\int_{-\infty}^{+\infty}F(\omega)\,e^{i\omega x}d\omega
$$

the usefulness of such operators lies in the properties they have:
1. for every $\omega$ from 0 to $\infty$, $F(\omega)$ maintain both the phase and the amplitude of the input signals

$$
A=\pm \sqrt{R(\omega)^2 + I(\omega)^2}\qquad \phi = \arctan\dfrac{I(\omega)}{R(\omega)}
$$

2. in the frequency domain we can extract the amplitude (or frequency) and phase plots, that provides us useful informations



# 2D generalization
The generaliztion to the 2D domain it's quite straightforward.
Instead of having time signals we have spatial signals, with spatial frequencies.
Whatever holds for 1D domain, holds also for 2D domain, but it's just more complex.
Note that from now on we refer to 2D grayscale images, but the very same discussion can be made using RGB images.

![lena-and-bricks-fourier-analysis](/assets/images/lena-and-bricks-fourier-analysis.png)

using logarithmic scale for the amplitude, we obtain the following 3d plot

![lena-and-bricks-fourier-analysis-3d](/assets/images/lena-and-bricks-fourier-analysis-3d.png)

just seeing the result we perceive thet such plots gather a lot of informations about the image we are dealing with.



# CONTINUE SOON