# AURORA GRID Pakistan Manual Payment Intake

These are the seven product-payment targets requested for immediate checkout setup from Pakistan.

Important boundary: these are public checkout/intake URLs generated inside the site. They are not real card-processing links. Because Hasan is in Pakistan, the default flow is manual no-Stripe intake: buyer selects product, sends product/problem/timeframe, then receives manual payment instructions.

Do not publish bank, Raast, wallet, or Payoneer receiving details directly in this public repository.

| Product | Price | Public manual-intake URL | Manual payment status |
|---|---:|---|---|
| K-ALIGN Claim Check | $99 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=kalign-claim-check | MANUAL_REQUEST_ACTIVE |
| AURORA Quick Decision Memo | $149 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=aurora-quick-decision-memo | MANUAL_REQUEST_ACTIVE |
| BLACKGLASS Thesis Attack | $249 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=blackglass-thesis-attack | MANUAL_REQUEST_ACTIVE |
| AURORA GRID Decision Brief | $299 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=aurora-grid-decision-brief | MANUAL_REQUEST_ACTIVE |
| CRF Constraint Forecast | $349 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=crf-constraint-forecast | MANUAL_REQUEST_ACTIVE |
| Forecast & Scenario Analysis | $499 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=forecast-scenario-analysis | MANUAL_REQUEST_ACTIVE |
| Forecast Portfolio Audit | $750 | https://hr185882-creator.github.io/aurora-grid-grindwire-site/checkout.html?product=forecast-portfolio-audit | MANUAL_REQUEST_ACTIVE |

## Pakistan-compatible flow

1. Buyer opens the product URL.
2. Buyer clicks `Request Manual Payment` by WhatsApp or email.
3. Buyer includes product, problem, timeframe, and available source material.
4. Seller replies with the appropriate private payment instructions.
5. Work begins only after payment and scope are confirmed.

## Suggested manual rails

Domestic Pakistan buyers:

- Raast / bank transfer
- Local bank transfer
- Wallet/bank method agreed privately

International buyers:

- Payoneer request / receiving account where available
- Bank transfer / wire where practical
- Wise-style transfer where supported by both parties
- Manual invoice where needed

## Scope rule

Keep high-ticket products scope-first:

- Decision-System Buildout
- Live Situation Watch
- AURORA GRID Advisory Retainer
- Custom Intelligence OS Setup

Do not turn those into instant checkout unless delivery boundaries, refund boundaries, and timelines are explicit.
