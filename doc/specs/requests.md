# Request System

## Table of contents

1. Motivation
1. Business rules
1. Use cases
1. Data model

## Motivation

In order to facilitate growth in downloadable content availability and diversity,
users should be provided a means by which to make requests for content from the
entire userbase.

## Business rules

### Request Creation

- Requests can be created by any user
- Creating a request requires a predetermined minimum cost in order to be
    performed.

### Parts of a Request

Requests have 5 distinct parts:

1. Requirements
1. Bounty
1. Description
1. Votes
1. Comments

#### Requirements

Torrent attributes used to distinguish unique pieces of content, should be
allowed designation as a requirement for filling a request. Examples can include
but are not limited to:

  * Published/Creation Date
  * Author/Creator/Publisher
  * Title
  * Source
  * File Format
  * File Encoding

- Each attribute can include zero or more permitted values for satisfaction of
    the requirement.
- The originator of the request can designate requirements upon request creation.

#### Bounty

Each request will have a bounty associated with it.

- All pre-tax costs associated with performing actions on a request are paid
    into the bounty that request.
- All costs and taxes associated with performing actions on a request are
    deducted from the actioning user's upload amount.
- The bounty for a request will be held in escrow and remitted to the user who
    submits a link to a torrent on the site that accurately fulfills the
    requirements of the request.


#### Description

Requests should provide for a description of the content requested. This
description is not intended to be a list of reuirements, but rather an outline
of details about the content that is known to be accurate at the time of the
initial request. These details are meant to help users decern the correct
content required for fulfillment in addition to any information that could be
helpful in locating the requested content.

- The description should include any additional information about the content
    that might be helpful to users attempting to fulfill the request.
- Fulfillment criteria that cannot be desgnated in the "Requirements" section,
    should be designated in the description.

#### Votes

All requests receive votes. A vote is an indication that a given user is
interested in having the request fulfilled.

- The initial request creation counts as a vote.
- Votes can be performed by all users.
- Votes require a predetermined minimum cost in order to be performed.
- Votes are subject to any required tax on casting a vote.
- All pre-tax costs to vote are associated 1:1 with the user who cast the vote.
    This allows the system to track bounty amounts contributed by each user.
- Each time a vote is cast, the "Last Voted" attribute is assigned the current
    timestamp.
- There is no limit to how many times a user can vote on a single request.
- Additional votes beyond the first do not increase the vote total, but
    additional bounty is accrued with the original vote.

#### Comments

A request may also have comments associated with it. This is where communication
can occur that is directly related to the associated request. Users can also use
the comments to discuss alternate acceptable content that could satisfy the
request requirements.

- Nothing apearing in the comments is a requirement for filling the request.
- Comments cannot re-define request requirements.

### Request Tax

Optionally, the site may require that a tax be placed upon request creation and
request voting. This tax is in addition to amounts required to create a request
or cast a vote for a request.

- The tax is set globally as a percentage applied to the cost associated with
    the action a user performs on the request.
- Tax amounts are **not** added to the request bounty, but are deducted from the
    actioning user's account.

### Request Reporting

- Any user may report a request.

### Request Editing

Editing a request can only be performed by the user who created the request, or
a user with request editing permissions, and only in the following situations:

- Request requirements can only be changed by the requesting user after the
    request is submitted if the request has received no votes.
- If a request has received one or more votes, requirements can only be changed
    by a user with request editing permissions.
- The requesting user can change requirements known to be inaccurate by
    sumbitting a report so the requirement can be modified by a user with
    request editing permissions.
- Request descriptions can only be changed by the requesting user if the request
    has received no additional votes.
- If a request has received one or more additional votes, request descriptions
    can only be modified by a user with request editing permissions.
- Descriptions known to be inaccurate can have a change requested by any user by
    sumbitting a report so it can be modified by a user with request editing
    permissions.

### Request Fulfillment

Requests can only exist in one of two states: filled or unfilled. There
are no intermediate states. Request fulfillment occurs when a user submits a
link to torrent, hosted on the current site, that satisfies the criteria
outlined in the request. Satisfaction of the criteria means:

1. At least one value satisfied in each designated requirement
1. Any additional requirements listed in the description are satisfied
    -or-
    Communication between the fulfilling user and requesting user indicating
    that a picece of content would be acceptable.

- Requests cannot be filled by a user unless that user is provided permission
    to do so. This permission can be turned on by default for all new users.
- The user filling the request has the total bounty of the request added to
    their account's upload amount.
- Once satisfied, a request can no longer be filled by additional uploads unless
    it has it's fulfillment revoked.
- A request can only have its fulfillment revoked by the requesting user, or a
    user with request editing permissions.

## Use cases

These use cases describe various ways the authentication system will interact.

**Use cases:**

1. User Creates a Request
2. User Edits a Request

### 1. User Creates a Request

**Actor:** Any user

**Brief:** A user creates a request for a piece of content.

**Preconditions:**

- None

**Trigger:** A user decides to request a piece of content

**Postconditions:**

- A new request is created in the system

**Basic Flow:**

1. A user navigates to the "Requests" page.
1. The user selects "New Request".
1. The user enters all values for each specific requirement that are allowed to
    successfully fulfill the request.
1. The user enters a description.
1. The user enters an initial bounty.
1. The user submits the request.

**Alternate Flow:**

* Bounty + Tax is greater than the user's available upload amount.
    1. The user changes the initial bounty.
    1. The user submits the request.

**Applicable business rules:**

- Request Creation

### 2. User Edits a Request

**Actor:** Any user

**Brief:** A user creates a request for a piece of content.

**Preconditions:**

- User has the request editing permission
    -or-
    User is the creator of the request

**Trigger:** A user needs to edit a request

**Postconditions:**

- A previously created request is modified

**Basic Flow:**


**Alternate Flow:**


**Applicable business rules:**

- Request Editing

## Data model

