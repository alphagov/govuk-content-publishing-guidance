---
layout: landing-page
sectionKey: Formatting content
eleventyNavigation:
  parent: Text formatting
title: Buttons
description: Add buttons for service start pages.
lastUpdated:
---

Buttons should only be used when creating a start page for a service. They should link users to the first step of a service.

>[!NOTE]
> Read more about [creating service start pages](https://design-system.service.gov.uk/patterns/start-using-a-service/), including when they should be made in Whitehall Publisher.
 
To create a button, add ‘{button start}’ before the link and ‘{/button}’ after it. For example:
 
```
{button start}[Button text](Service URL){/button}
```
The button text should be consistent with the action you’re asking users to take. For example, ‘Start now’, ‘Sign in’ or ‘Register or update your details’.

There should only be one button on a page.