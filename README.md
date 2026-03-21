# CalcSprint

Static marketing site for `calcsprint.com`.

## Stack

- Plain HTML/CSS/JS
- No build step
- Cloudflare Pages-compatible `_redirects` and `_headers`

## Deploy

Use these settings in Cloudflare Pages:

- Framework preset: `None`
- Build command: none
- Build output directory: `/`

For GitHub-based deploys, connect the repository and use the root directory as the Pages output.

## Domain Notes

- Path redirects and security/cache headers are handled by `_redirects` and `_headers`.
- Redirecting `www.calcsprint.com` to `calcsprint.com` should be configured in Cloudflare with Bulk Redirects after the custom domain is attached.
