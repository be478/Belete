# BK Accounting and Tax LLC — V1 Launch Readiness Checklist

## Status

The V1 website is structurally ready for final integration and launch QA. Keep production deployment blocked until all items marked **Required before launch** are complete.

## Completed

- [x] Responsive desktop/mobile navigation
- [x] Branded GitHub Pages preview
- [x] GitHub Pages base-path fix for `/Belete/`
- [x] Core service pages and homepage content
- [x] 15+ years of transferable professional experience wording
- [x] MSc reference removed from the Why BK homepage section
- [x] Microsoft Bookings environment-variable integration with safe fallback
- [x] Contact form intentionally disabled until a secure backend is connected
- [x] Sensitive-information warnings on contact pathways
- [x] Privacy Policy launch draft
- [x] Terms of Use launch draft
- [x] Canonical, Open Graph, Twitter, robots, and structured-data metadata
- [x] Keyboard focus treatment and skip-to-content support
- [x] Reduced-motion accessibility support
- [x] Branded 404 page
- [x] Production build check passing
- [x] GitHub Pages preview deployment passing

## Required before launch

- [ ] Add the official public Microsoft Bookings URL as `PUBLIC_BOOKING_URL`
- [ ] Connect and test a secure contact-form backend
- [ ] Add spam/bot protection to the contact form
- [ ] Verify contact submissions reach the intended BK business mailbox
- [ ] Professional review of Privacy Policy and Terms of Use
- [ ] Final desktop visual review
- [ ] Final mobile visual review
- [ ] Test all navigation, service, phone, email, booking, privacy, and terms links
- [ ] Confirm no client-sensitive data is requested in ordinary web forms
- [ ] Final production build after environment variables are configured

## Production deployment safeguards

- [ ] Merge `bk-website-v1` to `main` only after final approval
- [ ] Preserve existing Microsoft 365 MX, SPF, DKIM, DMARC, Autodiscover, and related DNS records
- [ ] Add only the web-hosting DNS records required for the website
- [ ] Confirm HTTPS on `bkaccountingtax.com` and `www.bkaccountingtax.com`
- [ ] Confirm canonical URLs resolve to the production domain
- [ ] Verify sitemap and robots behavior on production
- [ ] Re-test Microsoft 365 email delivery after DNS changes
- [ ] Re-test booking and contact flows on production

## Post-launch

- [ ] Submit sitemap to Google Search Console
- [ ] Configure privacy-conscious analytics only if approved
- [ ] Add real client testimonials only with permission
- [ ] Review DMARC policy progression after monitoring
- [ ] Schedule quarterly website content, security, and link review
