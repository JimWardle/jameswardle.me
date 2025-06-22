# Updated LLM Development Log

This document tracks the AI-assisted development of the James Wardle personal website, including design decisions, iterations, and collaborative process.

## AI Collaboration Overview

**Primary AI Assistant**: ChatGPT (OpenAI)  
**Development Period**: June 2025  
**Project Type**: Personal portfolio website  
**Collaboration Style**: Iterative design and development with direct implementation

## Project Goals

The user (James Wardle) wanted to create a professional personal website that:

- Reflects up-to-date experience as a DevOps engineer
- Has a sophisticated, understated design aesthetic
- Avoids generic or template-based appearance
- Uses no emojis or AI-sounding copy
- Performs well across devices and is easy to maintain

## Design Evolution

### Starting Point
- A clean, minimal static site built with HTML/CSS/JS
- Original design inspired by Apple with custom refinements
- Custom CSS (no frameworks), hosted on GitHub Pages

### Tone Refinement (June 2025)
- Removed generic or AI-flagging phrases from content
- Eliminated emojis and unnecessary spacing (e.g., em-spaces)
- Adjusted page copy to reflect the user's current CV and communication style

## Technical Enhancements

- Rebuilt all supporting pages (`about.html`, `projects.html`, `experience.html`, `contact.html`) to use `.page-content` wrappers
- Unified design language using Inter font and a teal/neutral colour palette
- Added new project: **Leaf Spy Analyzer** with external link and modern case-study style
- Rewrote landing page content to reflect current role, tone, and projects

## New Project Integration

### Leaf Spy Analyzer
- Full-stack SaaS for Nissan Leaf owners
- Real video input → OCR → GPT-4o battery report
- Built in <20 hours, deployed to production with CI/CD and payment integration
- 99.5% profit margin validated at £3.99 price point

## Email Configuration

- Domain email (`hello@jameswardle.me`) hosted on DreamHost
- Configured full mailbox for SMTP + POP3 integration
- Gmail configured to send and receive via custom domain

## Content Tone Principles

- Avoids phrases like "cutting-edge", "empowering", "leveraging"
- Uses plain, confident language grounded in real examples
- Designed to reflect the user's actual voice and CV tone

## Current Status

- [x] All HTML content aligned with updated CV
- [x] Design system applied to all pages
- [x] Leaf Spy Analyzer added as latest project
- [x] Email infrastructure connected and usable from Gmail
- [ ] Contact form wiring (next step)
- [ ] CV downloadable PDF (still in `downloads/`, ready for polish)