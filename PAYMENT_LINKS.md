# AURORA GRID Payment Link Targets

These are the seven product-payment targets requested for immediate checkout setup.

Important boundary: these are public checkout/intake URLs generated inside the site. They are not real card-processing links. Real card-processing URLs must be created inside Stripe, Gumroad, Lemon Squeezy, PayPal, or another payment provider account, then pasted into the `Provider payment URL` column.

| Product | Price | Public checkout/intake URL | Provider payment URL |
|---|---:|---|---|
| K-ALIGN Claim Check | $99 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=kalign-claim-check | PENDING |
| AURORA Quick Decision Memo | $149 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=aurora-quick-decision-memo | PENDING |
| BLACKGLASS Thesis Attack | $249 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=blackglass-thesis-attack | PENDING |
| AURORA GRID Decision Brief | $299 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=aurora-grid-decision-brief | PENDING |
| CRF Constraint Forecast | $349 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=crf-constraint-forecast | PENDING |
| Forecast & Scenario Analysis | $499 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=forecast-scenario-analysis | PENDING |
| Forecast Portfolio Audit | $750 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=forecast-portfolio-audit | PENDING |

## Recommended provider setup

Create one payment link per product with the exact product name and price above.

Suggested metadata fields:

- product_slug
- product_name
- customer_email
- decision_problem
- timeframe
- source_material_url

## Integration rule

Once real provider links exist, replace the product-specific checkout/intake links in `checkout.html` with the provider URLs, or add provider URLs as `paymentUrl` values in the product objects and render the primary button as `Pay now`.
