---
layout: landing-page
sectionKey: Setting access limits
order: 7
eleventyNavigation:
  parent: Publish update or retire content
  parentTitle: "Publish, update or retire content"
title: Setting access limits
description: Learn how to limit who can access your draft document.
lastUpdated:
---

{{ cta("Lead and supporting organisations no longer control who can access documents in Whitehall") }}


[[toc]]

## What is access limiting?

Access limiting allows you to control who can access documents in Whitehall.  They also affect who can see draft versions of documents in preview mode. 

They are different from a publisher's permissions because they control who can perform actions on a document rather than what actions they can perform.

There are three options for setting access limits on your documents:
- no access limiting
- organisation access limiting
- individual access limiting

Documents with access limiting will not be copied from the production environment into the integration environment.

## No access limiting

This is the default option.  It means there are no additional restrictions on who can perform actions on a document.

### If you don't want to limit access to your document

To remove existing access limits from a draft edition:

1. Go to the "Edit" screen for the edition
2. Go to the "Limit Access" section
3. Choose "No access limiting"
4. Click "Save"

Any existing access limits will now be removed.  Any publisher can access the document in Whitehall and see the draft document in preview mode.

## Limiting access to organisations

This restricts access to the document to publishers in the chosen organisations.  

Lead and supporting organsations do not affect who has access.  Only members of the organisations listed in the "Limit Access" section will be able to access the document.

You must include your own organisation in the list of access limiting organisations when you choose this option.

When you publish an edition with organisation access limiting, the access limiting will be removed.  If you want to limit access to a subsequent draft, you will need to add it to that draft.

### If you want to limit access to specific organisations

To limit access to an edition to publishers in specific organisations:

1. Go to the "Edit" screen for the edition
2. Go to the "Limit Access" section
3. Choose "Organisation access limiting"
4. Add your own organisation
5. Add any other organisations as required
6. Click "Save"

Now only publishers in the listed organsations can access the document in Whitehall and see the draft document in preview mode.

## Limiting access to named individuals

This restricts access to the document to a list of publishers, by specifying their email addresses.

The email address for each publisher you want to give access to must be the email address they use to log into signon.

You must include your own signon email address in the list of email addresses when you choose this option.

When you publish an edition with individual access limiting, the only publishers in the lead and supporting organisations will be able to perform actions on the document.

### If you want to limit access to specific publishers

To limit access to an edition to specific publishers:

1. Go to the "Edit" screen for the edition
2. Go to the "Limit Access" section
3. Choose "Individual access limiting"
4. Enter your own signon email address
5. Enter the signon email addresses of other publishers that should have access.  Make sure the addresses are separated by a comma, eg
```
me@example.com, you@example.com
```
6. Click "Save"

Now only specified publishers can access the document in Whitehall and see the draft document in preview mode.
