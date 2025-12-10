# Git & GitHub Helpsheet

## 1: What is Git & GitHub?

### Git vs GitHub

| **Git**                              | **GitHub**                              |
| ------------------------------------------ | --------------------------------------------- |
| A version control system                   | An online code hosting platform              |
| Tracks and manages changes in your project | Stores your repositories in the cloud         |
| Works locally on your computer            | Enables collaboration, issues, pull requests |
| “Track Changes” for code                | Like Google Drive for developers             |
| No internet required                       | Internet required                             |

## 2: Key Concepts

### Repository (Repo)

* A project folder tracked by Git.
* Contains all your code and history.

### Commit

* A snapshot of your code at a point in time.
* Like saving a checkpoint in a game.

### Branch

* A separate version of your code.
* `main` = production/primary branch.
* Allows working on features without breaking main code.

### Remote

* The connection between your computer and GitHub.
* `origin` = nickname for your GitHub repo URL.

---

## 3: Basic Git Workflow

### The 3-Step Process

1. **Stage** → `git add`

   * Select which changes to save.
   * Like putting items in a shopping cart.
2. **Commit** → `git commit -m "message"`

   * Save the staged changes locally.
   * Like taking a snapshot.
3. **Push** → `git push`

   * Upload commits to GitHub.
   * Like syncing to the cloud.

### Visual Flow

Your Computer → Git (Local) → GitHub (Remote)
`[Edit]` → `[Commit]` → `[Push]`

---

## 4: Setting Up Your First Repo

### Option 1: New Project (from scratch)

```bash
echo "# Project Name" >> README.md  # Create README
git init                            # Initialize Git
git add README.md                   # Stage file
git commit -m "first commit"        # Save snapshot
git branch -M main                  # Rename to main
git remote add origin [URL]         # Connect to GitHub
git push -u origin main             # Upload to GitHub
```

### Option 2: Existing Project

```bash
git remote add origin [URL]         # Connect to GitHub
git branch -M main                  # Rename to main
git push -u origin main             # Upload everything
```

> **Key Flag:** `-u` sets the default destination (only needed once!)

---

## 5: From GitHub to Deployment

### Modern Deployment Workflow

1. **Code locally** → Write your application.
2. **git add & commit** → Save changes in Git.
3. **git push to GitHub** → Upload to cloud.
4. **Auto-deployment** → Platform detects & deploys.
5. **Live application!** 🚀 → Your app is online.

### Git Hosting Platforms

* **GitHub** - Most popular, largest community.
* **GitLab** - Built-in CI/CD, self-hosting option.
* **Bitbucket** - Great for teams using Jira.

### Deployment Platforms

* **Vercel** - Best for Next.js, React.
* **Netlify** - Great for static sites.
* **Render/Railway** - Full-stack apps.

> **Why this matters:**  No manual file uploads,  Automatic updates on every push, Easy rollbacks if something breaks, Team collaboration made simple.

---

## SLIDE 6: Essential Git Commands

### Commands You'll Use Every Day

**`git status`**

* Shows what files have changed.
* See what's staged vs unstaged.
* *Run this constantly before committing!*

**`git pull`**

* Downloads changes from GitHub to your computer.
* Opposite of `git push`.
* *Always pull before starting work.*

**`git clone [URL]`**

* Downloads an entire repository from GitHub.
* Use when joining existing projects or starting from a template.
* *One-time command per project.*

**`git log`**

* Shows your commit history.
* See what changes were made, when, and by whom.
* *Press `q` to exit.*

### Working with Teams

**`git merge`**

* Combines two branches together.
* Example: Merge feature branch into `main`.

**Pull Requests (on GitHub)**

* Propose changes to a project.
* Team reviews your code before merging.
* Industry standard for collaboration.

**`git branch [name]`**

* Creates a new branch.
* Work on features without affecting main code.

### Quick Tips

* ⚠️ **Before you push:** Always run `git status` and `git log` to verify.
* ⚠️ **Stuck?** `git status` usually tells you what to do next.
* ⚠️ **Made a mistake?** Don't panic - Git keeps history, you can undo things.

### Common Workflow

```bash
git pull                        # Get latest changes
git status                      # Check what's changed
git add .                       # Stage all changes
git commit -m "Add feature"     # Commit with message
git push                        # Upload to GitHub
```
