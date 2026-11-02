# CPANEL SERVER CONSTRAINTS
- Host Environment: 2-Core cPanel CloudLinux Shared Server
- Rule 1: KEEP `images: { unoptimized: true }` in next.config.ts (prevents 100%+ CPU spikes).
- Rule 2: DO NOT use `getServerSideProps` for page rendering (causes server timeouts/502 errors).
- Rule 3: Restart app using `touch tmp/restart.txt` on cPanel SSH terminal only.