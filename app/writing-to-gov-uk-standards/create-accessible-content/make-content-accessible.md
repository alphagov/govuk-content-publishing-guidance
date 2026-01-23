---
layout: landing-page
sectionKey: Writing to GOV.UK standards
eleventyNavigation:
  parent: Create accessible content
  order: 2
title: Make your content accessible
description: Find out how to create GOV.UK content that follows the accessibility regulations.
lastUpdated:
---

[[toc]]

Anything published on GOV.UK needs to meet accessibility requirements set out in regulations. 

This page is a 'how to' for ensuring the accessibility of the different types of content formatting. It's not a breakdown of the accessibility regulations and guidelines. That's covered in the guidance on [understanding accessibility](/writing-to-gov-uk-standards/create-accessible-content/understand-accessibility/). 

You should also check the [GOV.UK style guides](/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/) and [tone of voice](/writing-to-gov-uk-standards/tone-of-voice/) guidance. Part of making accessible content is making it simple and clear, which our tone and style are designed to do.  

## Attachments

Use HTML when creating document attachments whenever possible. 

You must let users know how to request a different accessible version of attachments, such as British Sign Language (BSL), audio or braille. You can do this by leaving the 'Attachment is accessible' box unticked for all versions of the form when you upload them. 

### Using PDFs

PDFs are difficult to create accessibly. They often do not work well with assistive technology and do not change size automatically to the device and browser. 

There are some cases when you might need to publish a PDF, for example:

* it's a document which was designed to be printed and read on paper - for example, promotional material, a booklet or a leaflet
* you want to publish something in an Easy Read format - follow [the section on creating easy read documents in the guidance on accessible communication formats](https://www.gov.uk/government/publications/inclusive-communication/accessible-communication-formats#easy-read-and-makaton) 
* you're publishing something in a language not supported in HTML by Whitehall Publisher
* you need to [create a PDF/A](https://www.gov.uk/guidance/publishing-accessible-documents) for archiving purposes
* you're using Specialist Publisher to publish a document that could be misused if edited, such as an employment tribunal or asylum support tribunal decision
 
If you do need to publish a PDF, you must publish an accessible version of the attachment as well. 

### Attaching datasets

If you publish data that's only designed to be machine readable by external software, it's fine to use a CSV file (or other non-open format). 

If it's intended to be read by people, it's difficult to make CSV files accessible. You need to offer an alternative format as well. 

The Government Statistical Service has published [detailed guidance on releasing statistics in accessible spreadsheets](https://gss.civilservice.gov.uk/policy-store/releasing-statistics-in-spreadsheets/). They recommend publishing accessible versions of any non-accessible file formats you use (even if that's because they're optimised for machine readability). So, if you publish a CSV file of your data, it's good to publish an ODS version too. 

Avoid publishing statistical tables or datasets within a PDF or other formats designed mainly for text. It makes it difficult for users who rely on assistive technology such as screen readers which speak the text on a page. 

## Bold text

Do not use bold text instead of using subheadings. This is inaccessible because a screen reader will not recognise it as a header.

## Charts and graphs

Do not use a chart or graph to convey information without also explaining it in the text of your content. When you explain it, imagine you're describing it to someone over the phone. Avoid describing the chart vaguely or too broadly. For example, "The bar chart shows EU funds by percentage on the vertical axis and EU countries on the horizontal axis" is too broad. Explain what is happening in the data and any important trends. Do not just repeat the headline title.

Do not use colour alone to convey information in the chart or graph. Some visually impaired users will not be able to see colour differences. 

Make sure there is a high enough colour contrast ratio between segments, lines, text and background colour.

### Adding charts or graphs as images

If you cannot create a chart using Markdown, you'll need to upload it as an image. Use the scalable vector graphic (SVG) format for images of charts - it allows users to magnify the image without losing any quality. 

Leave the alt text field for the chart blank. Instead, add at least one of the following:

* a description of the chart directly under it
* a table of the raw data
* a link to the raw data in an accessible file

If you provide the raw data as a table or in an accessible file, make sure your table is formatted correctly and consider if it's an appropriate alternative. For example, when you have a chart showing a long time series of data, a description of the trends will be more appropriate than a table. The experience should be the same as looking at the chart.

## Diagrams

Only use a diagram if it makes the content clearer or summarises a large amount of information.

When you're creating the diagram, try to:

* follow normal reading direction - users want to read from left to right
* avoid overlapping connector lines
* use simple shapes - and as few different types as possible
* make it clear where the starting point is for process and flow charts
* use black and white as a default

Include a detailed explanation of the processes and relationships explained in the diagram in the body text. This is helpful for users who cannot see the diagram.

Leave the alt text field empty.

## Headings

Headings and subheadings help keep content easy to navigate. Do not skip heading levels when moving from a higher level to a lower level, for example from H2 to H4. Screen reader users may navigate using a list of headings and a missed heading level can make this confusing.

You do not always need to have text between headings. Missing text between headings is not a Web Content Accessibility Guidance (WCAG) fail, but sometimes adding text between headings is helpful to provide context.

## Images

Do not use images alone to provide information. This will exclude users who cannot see or access the image. Only use images if they help users understand information in a different way.

Text is easier to read than images when scaled up by people using screen magnifiers. Images may become pixelated and need to be scrolled vertically and horizontally when zoomed in.

Do not use images that contain text. 

### Describe images in the body content

Informative images can help users understand the written text in a different way. You must leave the alt text field empty and write a description in the body of content. This means the description is available to everyone.

Screen reading software will ignore images without alt text. If you can, describe the content of the image as though there is no image on the page. For example, write "the minister gave a speech…", instead of "an image of the minister giving a speech".

Another way to make sure you are describing the image properly is to imagine that you're reading out the content of the page on a telephone. 

## Links

Make link text descriptive and frontload it with relevant terms. Do not use something generic like 'click here' or 'more'. People using screen readers often scan through a list of links to navigate a page. It's important the links are descriptive so they make sense in isolation.

Do not use the same link text to link to different places. Avoid linking to the same place more than once if you can. If you have more than one link on a page to the same place, use similar link text - these do not need to be identical but should convey the same meaning.

### Avoid very short links

Very short links can create problems for users with limited dexterity. One-word links, for example, should have at least 3 syllables. Including more words in your link text also makes it more descriptive and user friendly.

### Avoid using anchor links

Anchor links are used to take a user to a particular section of a page.

They can take users to either:

* another section on the same page
* a section on a different page

Try to avoid using anchor links in your content. Anchor links can be disorientating for some users with access needs - for example, screen magnifier users and those with motor function impairments. People using assistive technology may have problems such as going back to the previous page, seeing what they've missed or realising that they've skipped forward.

There may be instances where an anchor link to another page is needed. For example, if people only need to read an annex of long, complicated guidance. If you have to do this, make it more accessible by making the link as descriptive as possible. This is so that users know what they will see on the destination page. For example, 'read Annex A of the EU spouse visa guidance to check your eligibility'.

The link text must give clues to:

* where you are sending them - 'the EU spouse visa guidance'
* what they need to do when they get there - 'read Annex A of the EU spouse visa guidance'
* why they are going there - 'to check your eligibility'

Your anchor link should make it clear that you're sending users to a different piece of guidance - it's often useful to include the title of the page they're going to.

### Linking to a page in a different language

If you are linking to a page in a different language, you must signpost the change in the link text and language of the origin page.

For example, '[trwydded car, ee o awtomatig i drawsyriant gyda llaw (yn Saesneg)](https://www.gov.uk/automatic-driving-licence-to-manual)' where 'yn Saesneg' means 'in English'.

This is so that screen readers can correctly pronounce content on the origin and destination page.

## Start buttons

If the start button is under a heading, that heading must relate to the start button's task (for example, 'Register online'). If it is not under a relevant heading, add a heading above the start button. 

## Tables

To make sure your table is accessible, you must have:

* a descriptive header for every column
* one header row only 
* only one item per cell - do not use line breaks
* 'no data' or 'not applicable' instead of empty cells

You should not have any split, merged or empty cells. The only time you should have an empty cell is the top left cell. This is used if you have a header row that does not need a column header. 

If you're copying and pasting a spreadsheet or a table from a document, remove any split or merged cells and fill in any empty cells. Empty cells make it difficult for users of assistive technology in particular to navigate the table.

You must only have one item per cell. If there are multiple items per cell, users of assistive technology will find it difficult to understand your table.

### Using headers in tables

Tables must always have a header row that includes a header explaining the content of each column in your table.

Headers help users understand the table's structure.

Table headers should:

* accurately describe the content in the relevant row or column
* be unique and not repeated within the table
* be capitalised

You can use links in row and column headers.

If your table also has a row header, use the # header Markdown. The row headers must be in column one. 

#### Example 1

The 3 different types of fruit are row headers, and Alice and Ben are column headers. The first row and the first column are marked as headers. As the row headers do not need a column header, the first cell is empty.

The markdown would look like this:

`| | Alice | Ben |`
`|---|---|---|`
`|# Apples | 0 | 3 |`
`|# Bananas | 2 | 3 |`
`|# Pears | 0 | 0 |`

It would look like this on GOV.UK:

<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header"> </th>
      <th scope="col" class="govuk-table__header">Alice</th>
      <th scope="col" class="govuk-table__header">Ben</th>
    </tr>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Apples</th>
      <td class="govuk-table__cell">0</td>
      <td class="govuk-table__cell">3</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Bananas</th>
      <td class="govuk-table__cell">2</td>
      <td class="govuk-table__cell">3</td>
    </tr>
        <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">Pears</th>
      <td class="govuk-table__cell">0</td>
      <td class="govuk-table__cell">0</td>
    </tr>
 </tbody>
</table>

#### Example 2

'Total score' is the column header for the row headers. In this example, the top left cell is not empty as the row headers need a column header.

The markdown would look like this:

`| Total score | Grade | Description|`
`|---------|---------|---------|`
`|# 0-30 | Fail | Your performance is unsatisfactory |`
`|# 31-42 | Grade B | You'll stay on the approved driving instructors (ADI) register |`
`|# 43-51 | Grade A | You have shown a high standard of instruction and you'll stay on the ADI register |`


It would look like this on GOV.UK:

<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Total score</th>
      <th scope="col" class="govuk-table__header">Grade</th>
      <th scope="col" class="govuk-table__header">Description</th>
    </tr>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">0-30</th>
      <td class="govuk-table__cell">Fail</td>
      <td class="govuk-table__cell">Your performance is unsatisfactory</td>
    </tr>
    <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">31-42</th>
      <td class="govuk-table__cell">Grade B</td>
      <td class="govuk-table__cell">You'll stay on the approved driving instructors (ADI) register</td>
    </tr>
        <tr class="govuk-table__row">
      <th scope="row" class="govuk-table__header">43-51</th>
      <td class="govuk-table__cell">Grade A</td>
      <td class="govuk-table__cell">You have shown a high standard of instruction and you'll stay on the ADI register</td>
    </tr>
 </tbody>
</table>

## Titles

Titles on GOV.UK must be unique and informative so that users know which page they are on.

Duplicate titles can confuse users - for example if they have more than one page open. This is particularly true for those with visual, cognitive or mobility impairments.

## Translations

You can add translations to any published document on GOV.UK, apart from fatality notices and statistical data sets. 

If you need to add translated text, you must use the translation tool. Do not add translated text on the same page as the English version.

The default language attribute on the document page is always set to English. If you add translated text to the English page, rather than using the translation tool, it creates problems for users with assistive technology.

## Videos

If using video, make sure:

* the video title describes the topic or purpose of the video
* you do not use flashing images - any large and bright content that flashes more than 3 times in one second
* there is no or low background noise, if your audio is mainly speech
* you add a voice over or transcript to text-based videos

### Closed captions and transcripts

Add closed captions and transcripts so users accessing the video without audio can read all of the content.

You can add or edit captions to YouTube videos in Youtube Studio. YouTube will provide automated captioning. Do not rely on automated captioning to get everything right.

YouTube and Vimeo have editing tools you can use to make corrections after uploading but before publishing. Use the [instructions for adding captions to YouTube videos](https://support.google.com/youtube/answer/2734796) or [instructions for adding captions to Vimeo videos](https://help.vimeo.com/hc/en-us/articles/21956884955537-How-do-I-add-captions-or-subtitles-to-my-video#h_01JJZA1ETEF5C0RCR1Z2WASC4D) for guidance. 

Make sure you select the correct language, especially if your default language is English but the video is in another language.

Go through the automated captioning and check the following:

* captioning is in sync with the person speaking
* there are no spelling mistakes
* it has captured the correct words, paying special attention to uncommon words or phrases

As well as dialogue, captions should identify who is speaking and include non-speech information conveyed through sound, including meaningful sound effects.

If your video is hosted outside of YouTube, make sure you provide the transcript in HTML.

### Audio description

Not all users will be able to see the visuals in your video. If your video has visuals which are important in understanding the context, you'll need to describe this verbally.

#### Example 1

If you are showing a diagram which is not explained verbally in the video, you will have to describe the diagram. Without this information, the video would make little sense to visually impaired users. You will also need to make sure this is captured in the transcript.

#### Example 2

At the end of a press conference, if there's an important handshake between ministers which signals the closing of a deal and the reporter does not say this, you'll need to describe it.

#### Example 3

If you show a user journey of a new service or product, you'll need to describe the journey so everyone has access to the context.

You must make sure that any important information that affects people's understanding of the video is explained verbally, not just through imagery.

*[BSL]: British Sign Language
*[SVG]: Scalable vector graphic
*[WCAG]: Web Content Accessibility Guidance
