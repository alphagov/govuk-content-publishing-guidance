---
layout: landing-page
sectionKey: Publish update or retire content
eleventyNavigation:
  parent: Standard content types
  order: 7
title: News articles
description: Learn when to use the news articles content type.
lastUpdated:
---

[[toc]]

## When to use this content type

Use the news article content type to share news and updates about the government’s work.

## Choose the right type of news article

There are different types of news articles. Make sure you choose the right type.

| Content type | What to use it for | What not to use it for| 
|---|---|---|
| Government response | Government statements produced in response to media coverage by your organisation’s press team. For example, rebuttals or ‘myth busters’. These are usually short and to the point, consisting of a quotation with no headings. | Statements issued to Parliament. Speeches or press articles. Letters to newspapers written by ministers. Use the [speech type](LINK) for all of these instead. |
| News story | News content written only for GOV.UK which users need, can act on, would expect to get directly from the government and cannot get from other sources. For example, the opening of a government grant scheme or a change to public services that affects public sector employees. The content should be self-contained. It should be possible to delete it from the site without affecting anything else. You can also use this to set out details about future events that your organisation is holding. Use a [document collection](LINK) to collect multiple news stories if you’re holding a programme of events. | Information that puts your organisation’s views on record. Use the government response type instead. Duplication of press releases or [fatality notices](LINK). Duplication of another organisation’s news story. Consider publishing a news story jointly, or cover the same story from different angles or for different audiences. Promotion of the publication of other content, like statistics. General purpose content pages or just to link through to other GOV.UK content. Guidance for users. Link to a [guidance publication](LINK) or [detailed guide](LINK) if there’s something a user can act on. |
| Press release | Unedited press releases as sent to the media. You can put additional notes at the end under a ‘Background’ heading. Official statements by an organisation spokesperson. Official statements made by a minister, apart from parliamentary statements. | Ministerial statements issued to Parliament. Use the [speech type](LINK) instead. Promotion of the publication of other content, like statistics. Guidance for users. Link to a [guidance publication](LINK) or [detailed guide](LINK) if there’s something a user can act on. |
| World news story | Announcements specific to one or more world locations. For example, news related to a British embassy. | Duplication of another government organisation’s news story. |


## Create a draft

{% include "reusable-content/signon-account-whitehall.md" %}

### If you’re creating a new article

1. Go to [Whitehall Publisher](https://whitehall-admin.publishing.service.gov.uk/government/admin/).
2. Select the ‘New document’ tab.
3. Select ‘News article’ and then select the ‘Next’ button.
4. Select the content type from the dropdown under ‘News article type (required)’.
5. Add the title, summary and body. Read the [tone of voice guidance](/writing-to-gov-uk-standards/tone-of-voice/) and [formatting guidance](LINK) for help.
6. Select ‘Limit access’ under ‘Settings’ if your draft is sensitive. This means only users from organisations tagged to the content can see it before it’s published. It will not be copied across to [Integration](LINK).
7. If you’re creating a world news story, tag the story to a world location and worldwide organisation under the ‘Associations’ heading.
7. Select the ‘Save’ button at the bottom of the page.

After saving the page, you can add images and attachments.

### If you’re updating an existing article

Do not make updates unless you’re correcting an error. News articles are supposed to reflect the government’s position at a particular moment in time.

If a news article is outdated, consider [withdrawing or unpublishing the existing content](LINK) and publishing a new article.

If you’re correcting an error:

1. Go to [Whitehall Publisher](https://whitehall-admin.publishing.service.gov.uk/government/admin/).
2. Select the ‘Documents’ tab.
3. Search for the news article you want to edit, and select the ‘View’ link next to it. This will take you to the edition summary page. If you only want to update the topic tags and nothing else, select ‘Change tags’ under ‘Topic taxonomy tags’. Otherwise, keep following these steps.
4. Select the ‘Create new edition’ button. If a new edition has already been created, select the ‘Go to draft’ link. You can then select ‘Edit draft’ or, if you do not want to use this draft, select ‘Delete draft’ and then select ‘Create new edition’.
5. Make any changes to the title, summary or body as needed. Read the [tone of voice guidance](/writing-to-gov-uk-standards/tone-of-voice/) and [formatting guidance](LINK) for help.
6. Do not change anything under the 'Political' heading. This is related to [history mode](/writing-to-gov-uk-standards/plan-manage-content/manage-existing-govuk-content/) and it will only need to be changed if your organisation is asked to take part in an audit of content before a general election.
7. Select ‘Limit access’ under ‘Settings’ if your draft is sensitive. This means only users from organisations tagged to the content can see it before it’s published. It will not be copied across to [Integration](LINK).
8. Decide whether you need to [write public change notes](/writing-to-gov-uk-standards/tone-of-voice/change-notes/). Go to the bottom of the page and select the relevant option under ‘Do users have to know the content has changed?’, and add your change notes if needed (you can edit them again before you publish the draft).
9. Select the ‘Save’ button at the bottom of the page.

You can now edit the images and attachments.

{% include "reusable-content/remove-history-mode.md" %}

## Add or remove images

Make sure you’ve correctly [formatted the images](LINK) before you add them.

Select the ‘Images’ tab at the top of the page. You can upload images here. Each image will need a different file name.

One of the images you upload will be the lead image, unless it’s an SVG file. The lead image appears above the body content. You cannot use the lead image again in the body.

The first image you upload will automatically be the lead image. If you want to change the lead image, upload another image and select ‘Select as lead image’.

For images other than the lead image, you’ll be given a ‘Markdown code’. You can copy and paste that into the body and the image will appear there.

If you want to remove an image, you can remove its code from the body. You can then upload a new version of the image and use its code instead.

### If you do not add any images or if you only add SVG images

The default image for the lead organisation will be used as the lead image, if there is one.

You can add or change the default image on the relevant [organisation page](LINK).

## Add or edit attachments

{% include "reusable-content/add-attachments-markdown-1.md" %}

### If you’re adding new attachments

{% include "reusable-content/add-attachments-markdown-2.md" %}

## Add or remove contact details

{% include "reusable-content/add-contacts.md" %}

## Change the ‘first published date’

{% include "reusable-content/change-first-published.md" %}

## Add or remove tags to organisations, people and events

{% include "reusable-content/associations-introduction.md" %} 

{% include "reusable-content/associations-ministers.md" %}

{% include "reusable-content/associations-world.md" %}

{% include "reusable-content/associations-topical.md" %}

{% include "reusable-content/associations-organisations.md" %}

> [!NOTE]
> If you’re creating a world news story, you cannot tag it to a minister or a lead or supporting organisation, but you must tag it to a worldwide organisation.

## Update settings of the draft

{% include "reusable-content/update-settings-attachments.md" %}

## Add or remove topic tags

{% include "reusable-content/add-remove-topic-tags.md" %}

## Add or edit translations

If you’re working on a world news story that will never be published in English, tick ‘Create a foreign language only news article’ and select the language.

Otherwise, you need to have an English version and then a translation.

### Add a new translation

{% include "reusable-content/add-translations-current-draft-1.md" %}

### Edit an existing translation

{% include "reusable-content/add-translations-current-draft-2.md" %}

## Update the URL

{% include "reusable-content/update-url.md" %}

## Publish the draft

{% include "reusable-content/publish-draft.md" %}

*[GDS]: Government Digital Service

