<p align="center">
  <a href="https://gitpoint.co/">
    <img alt="IMReader" title="IMReader" src="https://i.ibb.co/4KdnnZK/OCR-BG.png" height="400px" width="700px">
  </a>
</p>

<div align="center">

[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/chinmaychahar/ocr?logo=github&style=for-the-badge)](https://github.com/chinmaychahar/) 
[![GitHub last commit](https://img.shields.io/github/last-commit/chinmaychahar/ocr?style=for-the-badge&logo=git)](https://github.com/chinmaychahar/) 
[![Languages](https://img.shields.io/github/languages/count/chinmaychahar/ocr?style=for-the-badge)](https://github.com/chinmaychahar/ocr)
[![Generic badge](https://img.shields.io/badge/view-website-blue?style=for-the-badge&label=View%20Deployment%20)](https://imreader.netlify.app/) 

[![Latest release](https://badgen.net/github/release/chinmaychahar/ocr)](https://github.com/chinmaychahar/ocr/)
[![GitHub watchers](https://img.shields.io/github/watchers/chinmaychahar/ocr?style=social&label=Watch&maxAge=2592000)](https://GitHub.com/chinmaychahar/ocr/)
[![GitHub issues](https://img.shields.io/github/issues/chinmaychahar/ocr)](https://gitHub.com/chinmaychahar/ocr/issues/)
</div>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Table of Contents

    - Overview
    - Interface
    - Tech Stack
    - Setup Guide
    - Local Development
    - Contribution Guidelines

 <br />

## 🚀 Overview

IMReader Tool is a accessibility tool for processing images at ease. It is built using React.js for frontend, Tesseract.js for OCR and Speech Synthesis feature of the Web Speech API to render audio. It is a small step towards making working with images more accessible. The project takes inspiration from recent developments in the area of OCR TTS to develop feasible reading assistants for differently-abled people while working with digital content. 

The tool mainly utilizes:
  - **Tesseract.js** which is a library in pure javascript that supports more than 100 languages, automatic text orientation and script detection
  - **React-Speech-Kit** hooks for in-browser Speech Recognition and Speech Synthesis

## 💻 Interface

<table>
	<tr>
		<td align="center">
			<img src="https://i.ibb.co/260KXW2/img1.png" alt="1st screen" width="550"/></td>
		<td align="center">
			<img src="https://i.ibb.co/VqGPG7P/c2.png" alt="2nd screen" width="500"/></td>
	</tr>
	
</table>

## 📍 Tech Stack

<img src="https://img.shields.io/badge/react%20-%2314354C.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## 🔨 Setup Guide

To ensure that you are able to install everything properly, it is recommended to have Git, NPM and Node.js installed.

1. Git

   `git` version 2.13.1 or higher. Download [Git](https://git-scm.com/downloads) if you don't have it already.

   To check your version of git, run:

   ```shell
    git --version
   ```

2. Node

   `node` version 16.15.1 or higher. Download [Node](https://nodejs.org/en/download/) if you don't have it already.

   To check your version of node, run:

   ```shell
    node --version
   ```

3. NPM

   `NPM` version 5.6.1 or higher. 

   To check your version of npm, run:

   ```shell
    npm --version
   ```

## ⚡ Local Development

To start with setting up the Local Project Environment:

```shell
git clone https://github.com/chinmaychahar/OCR.git
cd frontend
npm run dev:install
```
Open http://localhost:3000 to view it in your browser.

## 🤝 Contribution Guidelines 

Kindly follow the below guidelines if you wish to contribute to the project:

**1.** Fork [this](https://github.com/chinmaychahar/ocr) repository and clone it.

```
git clone https://github.com/chinmaychahar/OCR.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd frontend
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/chinmaychahar/OCR.git
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perfom your desired changes to the code base.

**9.** Track your changes:heavy_check_mark: .

```
git add .
```

**10.** Commit your changes .

```
git commit -m "Relevant message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`.

**13.** Add appropriate title and description to your pull request explaining your changes.

**14.** Click on `Create Pull Request`.

## Made with ❤ by Chinmay

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
