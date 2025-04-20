---
title: "Decoding Images: Fourier Transform for 2D & 3D Image Analysis"
date: 2025-04-18
header:
  image: /assets/images/fourier-images/fourier-analysis-post-wallpaper-cropped.jpg
categories:
  - computer vision
tags:
  - fourier analysis
  - dsp
  - image processing
author_profile: false
toc: true
---

Today we’ll explore how a classic mathematical tool reveals rich information about patterns, textures, and structures, especially when dealing with noisy or repetitive images.

<a href="https://colab.research.google.com/github/damianoimola/damianoimola.github.io/blob/master/assets/notebooks/fourier-analysis.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>





# Introduction
Fourier transformation are a powerful tools that allows us to write a function in its frequency domain as a sum of a number of sinusoids. Its application domain spans along every engineering and science field. Guess what, Computer Vision is one of the fields in which Fourier Analysis is really helpful.

For example whan dealing with noisy images, or when you need to discover patterns inside an image. We'll see some of such applications.




# Pills of background
The Fourier transform in one dimension is defined as follows: let $f(x)$ be a signal belonging to $\mathbf{R}$

$$
\begin{aligned}
    F(u)&=\int_{-\infty}^{+\infty}f(x)\,e^{-i2\pi u x}dx
\end{aligned}
$$

that can be easily rewritten using the Euler Formula. Here $u$ is the frequency and $F(u)$ is a function lying in Complex domain that carries two important pieces of information:
- Amplitude $A(u)$: that tells you how strong the frequency $u$ is
- Phase $\phi(u)$: that tells you how thw frequency $u$ is shifted in time (or as we'll see later, in space)


There exists also the inverse mapping, the so called 'Fourier antitransform' (or Inverse Fourier transform) and is usefull to reconstruct the original signal

$$
f(x)=\int_{-\infty}^{+\infty}F(u)\,e^{i 2\pi u x}du
$$

the usefulness of such operators lies in the properties they have:
1. we can toogle between time and frequency representations of the signal

2. for every $\omega$ from 0 to $\infty$, $F(\omega)$ maintain both the phase and the amplitude of the input signals

    $$
    A=\pm \sqrt{R(\omega)^2 + I(\omega)^2} \quad \phi = \arctan\dfrac{I(\omega)}{R(\omega)}
    $$

3. in the frequency domain we can extract the amplitude (or frequency) and phase plots, that provides us useful informations





# 2D settings and the $n$D generalization
The generalization to the 2D domain it's quite straightforward.
Instead of having time signals, we have spatial signals with spatial frequencies and phases.
Whatever holds for 1D domain, holds also for 2D domain, but it's *just* more verbose (another integral kicks in), here is the 2D Fourier Transform

$$
\begin{aligned}
    F(u, v)=\int_{-\infty}^{+\infty}f(x, y)\,e^{-i2\pi (ux + vy)}dx\;dy
\end{aligned}
$$
and the usual Antitransform
$$
\begin{aligned}
    f(x, y)=\int_{-\infty}^{+\infty}F(u, v)\,e^{i2\pi (ux + vy)}du\;dv
\end{aligned}
$$

Being more specific, when we apply fourier transforms to digital images, which are discrite and finite, we can switch to summations in place of the integrals adn we call it **Discrete Fourier Transforms (DFT)**. They are defined as follows

TODO

Note that from now on I'll refer to *2D grayscale images*, but the very same argument can be applied to RGB images.






## Amplitude and phase plots
The fourier transforms allows us to extract the phase and the plot of an image, and they have the very same meaning we've seen in 1D, but here they are spatial:
- 

![lena-and-bricks-fourier-analysis](/assets/images/fourier-images/lena-and-bricks-fourier-analysis-2.png)

using logarithmic scale for the amplitude, we obtain the following 3D plot

![lena-and-bricks-fourier-analysis-3d](/assets/images/fourier-images/lena-and-bricks-fourier-analysis-3d-2.png)

where in the left we have the 3D amplitude spectrum of Lena, while in the right the one for bricks wall (note that is a meshgrid).

Just seeing such results we perceive that these plots gather a lot of informations about the image we are dealing with.
A way to handle them is the mixing of amplitude and phase plots from 2 different images

![lena-and-bricks-phase-amp-mix](/assets/images/fourier-images/lena-and-bricks-phase-amp-mix-2.png)




# CONTINUE SOON