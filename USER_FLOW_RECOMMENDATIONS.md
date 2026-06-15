# The Lore Club: User Flow Recommendations

Research basis: Teachers Pay Teachers marketplace mechanics and the product
strategy in `THE_LORE_CLUB_STRATEGY.md`.

## Core flow change

The current product flow is:

> Search or browse -> view a short listing -> add to cart -> receive an order
> confirmation -> open a mostly read-only trip page.

The recommended flow is:

> Describe the group trip -> compare proven plans -> inspect trust and fit ->
> use this plan -> personalize it -> invite the group -> decide and book
> together -> verify the completed trip.

The product should feel like buying a head start and activating a workspace,
not downloading content.

## Navigation

Replace the current public navigation with:

- `Find a trip`
- `How it works`
- `Sell a trip`
- `My trips` for signed-in buyers
- `Creator dashboard` for active creators
- Account menu

Use `Find a trip` rather than `Browse`. It communicates an outcome instead of
a catalog action.

Do not show both buyer and creator dashboard links to every user. Adapt the
navigation to the user's active role.

## Buyer flow

### 1. Home: begin with the trip brief

The homepage should ask what the organizer is trying to make happen.

Recommended fields:

1. Occasion: bachelorette, birthday, friends' trip, reunion, off-site, or other
2. Destination: allow `Not sure yet`
3. Group size
4. Number of days
5. Approximate per-person budget

Primary CTA:

> Find trips that worked

Secondary paths:

- Browse popular occasions
- Explore by destination
- See a sample trip

Do not lead with an unstructured search bar alone. The structured brief creates
better results and starts collecting the data needed for matching.

Recommended homepage copy:

> Start with a trip that already worked.

> Proven plans from real groups, ready to customize and book together.

### 2. Results: show fit, not only inventory

The results page should preserve the trip brief at the top and allow it to be
edited without restarting.

Each card should show:

- Trip title and destination
- Occasion
- Duration and tested group-size range
- Estimated per-person cost
- `Trip Proven` or other creator credential
- Last verified date
- Verified rating and number of completed trips
- Match reason, such as `Great fit for 8-12 people`
- Price of the plan
- Save button

Filters should include:

- Occasion
- Destination or neighborhood
- Group size
- Duration
- Per-person budget
- Season
- Pace
- Nightlife level
- Family, accessibility, dietary, and alcohol preferences
- Proven trip, local expert, or professional planner

Sort options:

- Best match
- Most proven
- Most recently verified
- Lowest estimated trip cost
- Highest rated

Add an empty-result recovery path:

> No exact match yet. Show plans that can be adapted.

Avoid a generic popularity ranking. Relevance, freshness, and verified outcomes
should be visible in the interface.

### 3. Listing: answer "Will this work for us?"

The listing page should be a trust and decision page, not a description plus a
price.

Above the fold:

- Hero image
- Title, occasion, and destination
- Duration, group range, and estimated per-person trip cost
- `Trip Proven` badge and last verified date
- Creator identity and expertise
- Verified rating and completed-trip count
- Primary CTA: `Use this plan`
- Secondary CTA: `Preview day 1`
- Save button

The rest of the page should contain:

1. Why this trip works
2. Who it is best for and who it is not for
3. A visual day-by-day preview with locked details
4. Map preview and neighborhood summary
5. What's included after purchase
6. Estimated budget by lodging, food, activities, and transport
7. Booking lead-time warnings
8. What the original group changed or would do differently
9. Verified reviews with group type, date, and spend accuracy
10. Creator profile and other plans
11. Update policy, support window, usage rights, and refund terms

Replace `add to cart` with `Use this plan`. Most early purchases will be a
single plan, so a cart adds friction without adding meaningful value. Bundles
can introduce cart behavior later.

### 4. Checkout: short, direct, and trustworthy

The checkout entry point should display:

- Plan name and creator
- Included Trip Workspace
- Update entitlement
- Support entitlement
- Group-use license
- Exact price
- Refund policy

Require sign-in only when the buyer chooses to purchase or save permanently.
After authentication, return the buyer to the same listing and continue the
purchase.

The app should send only the listing ID to the checkout API. The server must
load the canonical title, price, seller, and listing status.

### 5. Purchase completion: activate the trip immediately

Do not make the receipt the main post-purchase destination.

After Stripe confirms payment:

1. Create an order.
2. Clone the purchased plan into a buyer-owned Trip Workspace.
3. Send the buyer directly to a short setup flow.

The order confirmation can remain available as a receipt page, but it should
not interrupt activation.

### 6. Trip setup: three quick steps

Step 1, trip basics:

- Trip name
- Dates or date range
- Expected group size
- Departure city, if useful

Step 2, personalize:

- Target budget
- Pace
- Nightlife preference
- Dietary, mobility, child, pet, and alcohol considerations
- Mark itinerary items as keep, maybe, or replace

Step 3, invite:

- Share link
- Email or phone invitations
- Organizer and co-organizer roles
- `Skip for now`

Progress copy should reinforce the value:

> Your plan is ready. Let's make it yours.

### 7. Trip Workspace: make this the core product

Use five primary views:

- `Plan`
- `Map`
- `Group`
- `Budget`
- `Bookings`

The default Plan view should include:

- Organizer checklist
- Day-by-day editable schedule
- Drag-and-drop ordering
- Keep, replace, and remove actions
- Travel time between items
- Alternatives from the creator
- Booking status
- Notes and group comments

The Group view should include:

- Participants and RSVP status
- Preference collection
- Polls and voting
- Decision deadlines
- Organizer and co-organizer permissions

The Budget view should include:

- Estimated total and per-person cost
- Category totals
- Planned versus actual spend
- Shared and individual expenses
- Payment status

The Bookings view should include:

- Reservation status
- Booking links
- Confirmation details
- Cancellation deadlines
- Who is responsible
- Price and availability alerts

On mobile, add a `Today` mode showing only the current schedule, addresses,
reservation details, contact information, and navigation actions.

### 8. Invited participant flow

Invited group members should not be forced through a marketplace onboarding
flow.

Recommended path:

1. Open invitation.
2. See trip name, dates, organizer, and a short schedule preview.
3. Join with email, Google, or Apple.
4. Answer a short preference survey.
5. Vote on pending decisions.
6. View the parts of the trip allowed by the organizer.

Participants should see a subtle path to future conversion:

> Planning your own trip? Start with a proven plan.

This creates a natural organizer-to-participant acquisition loop.

### 9. During and after the trip

Before departure:

- Remind organizers about unbooked items and unpaid balances.
- Notify the group of schedule changes.
- Surface weather or closure problems with alternatives.

After the end date:

1. Ask whether the trip happened.
2. Ask which itinerary items were completed, skipped, or replaced.
3. Capture actual spend ranges.
4. Request ratings for the plan, accuracy, pace, and creator.
5. Ask one concise written question: `What should the next group know?`
6. Award Lore Credits after a verified review.

This flow creates the outcome data that differentiates The Lore Club from an
AI itinerary generator.

## Creator flow

### 1. Creator entry page

`Sell a trip` should first explain:

- What can be sold
- What buyers receive
- How creator earnings work
- What proof and rights are required
- An example storefront and earnings breakdown

Primary CTA:

> Turn a trip you took into a plan

Do not begin with a long blank listing form.

### 2. Import first

The recommended creator sequence is:

1. Choose import source.
2. Upload or paste the trip.
3. Let the system extract the itinerary.
4. Review and correct it in a structured editor.
5. Add marketplace details.
6. Prove, price, preview, and publish.

Import options:

- PDF or document
- Spreadsheet
- Plain text
- Calendar
- Google Maps list
- Start manually

This makes the first action concrete and lowers the work required to create
supply.

### 3. Structured review

After import, show a checklist:

- Destination recognized
- Days and times extracted
- Places matched and mapped
- Estimated prices found
- Booking links identified
- Missing or unavailable places flagged

Let the creator edit each itinerary item as a structured card with:

- Name and type
- Day and time
- Address
- Price range
- Booking URL
- Notes
- Alternative
- Photo

Always require creator approval before AI-extracted content is published.

### 4. Marketplace details

Once the core trip exists, ask for:

- Listing title
- Occasion
- Best group-size range
- Duration
- Estimated per-person cost
- Season
- Pace and nightlife level
- Accessibility and dietary suitability
- Who it is for and not for
- Hero image

Generate a suggested description from the structured trip, then let the creator
edit it.

### 5. Proof and trust

Ask how the creator knows the destination and plan:

- I took this exact trip
- I am a local expert
- I am a professional planner
- I curated this from research

For `Trip Proven`, collect private supporting evidence such as dated booking
confirmations or photos. Clearly explain what remains private and what badge
the creator can earn.

Require confirmation of content and image rights.

### 6. Pricing and earnings

The pricing step should show:

- Suggested range based on plan completeness
- Buyer price
- Platform fee
- Estimated creator payout
- Optional future booking revenue share

Creators should never need to calculate marketplace economics themselves.

### 7. Preview and publish

Preview the listing exactly as a buyer will see it.

Use a publication checklist:

- Complete itinerary
- At least one image
- Budget estimate
- Creator identity
- Proof status
- Rights confirmed
- Payout account connected

After publication, offer:

- Copy share link
- Create a free sample
- Add to a bundle
- View storefront

### 8. Creator dashboard

Replace the current three-number analytics screen with action-oriented sections:

- Needs attention
- Listings
- Sales and payouts
- Buyer questions
- Reviews
- Performance

Key actions:

- Refresh an aging listing
- Fix a broken or unavailable place
- Respond to a buyer
- Complete payout setup
- Publish a draft

Metrics:

- Listing impressions
- Preview views
- Saves
- Purchase conversion
- Trip Workspace activation
- Completed trips
- Booking clicks and attributed revenue
- Refunds
- Rating
- Creator payout

## Messaging changes

Messaging should not become an unlimited concierge promise.

On the listing, state exactly what is included:

- Pre-purchase public questions
- A fixed post-purchase support period
- Typical creator response time
- Topics the creator can and cannot help with

Convert repeated public questions into listing FAQs so the marketplace becomes
more useful over time.

## Route-level changes

| Current route | Recommended role |
| --- | --- |
| `/` | Structured trip brief and occasion discovery |
| `/browse` | Matched results with filters; consider renaming internally to `/find` |
| `/listing/[id]` | Trust-rich decision page with preview and `Use this plan` |
| `/order/[id]` | Receipt and support details, not the primary destination |
| `/trips/[id]` | Editable collaborative Trip Workspace |
| `/sell/new` | Import-first creator wizard |
| `/sell/analytics` | Creator dashboard with actions and funnel metrics |
| `/creators/[handle]` | Trusted storefront with expertise, proof, followers, and collections |

Recommended new routes:

- `/trip-brief`
- `/checkout/[listingId]`
- `/trips/[id]/setup`
- `/trips/[id]/invite`
- `/trips/[id]/review`
- `/sell`
- `/sell/import`
- `/sell/listings/[id]/edit`
- `/sell/listings/[id]/preview`
- `/account/saved`
- `/my-trips`

The exact route names matter less than preserving progress and making back
navigation predictable.

## First release priorities

### P0: Complete the purchase-to-activation loop

1. Structured homepage brief
2. Real search results and filters
3. Trust-rich listing page
4. Direct `Use this plan` checkout
5. Secure server-priced purchase
6. Automatic Trip Workspace creation
7. Three-step trip setup
8. Editable schedule and group invitations

### P1: Create trust and repeat use

1. Verified creator and trip badges
2. Verified post-trip review flow
3. Saved plans
4. Budget and booking status
5. Creator storefront
6. Creator dashboard
7. Freshness and broken-place reporting

### P2: Add marketplace growth loops

1. Lore Credits
2. Follows and update notifications
3. Free previews and samples
4. Bundles
5. Group voting
6. Referral links
7. Attributed booking links

## Events to instrument

Track the funnel from the first release:

- `trip_brief_started`
- `trip_brief_completed`
- `search_results_viewed`
- `search_filter_applied`
- `listing_viewed`
- `listing_preview_opened`
- `listing_saved`
- `checkout_started`
- `checkout_completed`
- `trip_setup_started`
- `trip_setup_completed`
- `participant_invited`
- `participant_joined`
- `itinerary_item_changed`
- `poll_created`
- `booking_link_clicked`
- `trip_marked_completed`
- `verified_review_submitted`
- `creator_import_started`
- `creator_import_completed`
- `listing_published`

The most important conversion chain is:

> Trip brief completed -> listing viewed -> purchase -> Trip Workspace activated
> -> participant joined -> trip completed.

## Decisions to avoid

- Do not call the purchased product a download.
- Do not make a receipt page the product's moment of delight.
- Do not require every invited participant to shop before joining.
- Do not use a generic cart until multi-product purchasing is common.
- Do not ask creators to manually recreate data that can be imported.
- Do not hide freshness, proof, estimated cost, or suitability below the fold.
- Do not add a broad social feed before collaboration and completion work.
