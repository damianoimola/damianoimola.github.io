---
title: "How To Behave As A Robot"
date: 2026-09-21
header:
  image: /assets/images/robotic-pet/lumino-generated-cropped.png
categories:
  - robotics
  - DIY
tags:
  - robotic-pet
  - diy
author_profile: false
toc: true
---


How will Lumino behave against the scenarios will face?

Waiting for the parts, today we'll shape the flamable spirit of Lumino :fire:

# The Philosophical POV

How to not cite the three laws of robotics? Asimov will like it for sure, but I think he will appreciate more the following sentence from *The Rest of the Robots (1964)*, which lead the just cited laws of robotics. The citation is

  

<figure>
  <blockquote>
    <p>
      Knowledge has its dangers, yes, but is the response to be a retreat from knowledge? Or is knowledge to be used as itself a barrier to the dangers it brings?
    </p>
  </blockquote>
</figure>

  

That screams to stop the clichè of rebelling robots whihc destroy their creators. He wants to stop the idea that the knowledge, actually the technology, might turn on us. Let's leverage technology (and so, robots) by bounding them by rules and making them useful and reliable.

  

Let me say that the rules have still some dilemmas, explored by the author himself; however is a clever and useful starting point.

  

  

# The Practical POV

Well, from a practical and pragmatic point of view, without a behavior, the robot is an ensemble of useless electronics and mechanics.

We can start to give it some knowledge using the library [BehaviourTree.CPP](https://www.behaviortree.dev/docs/intro).

This post will have several code snippet, then at the end there will be the button to download the complete code file.