import ScrollLinked from "./ScrollLinked";

export function DayTwo() {
  return (
    <ScrollLinked>
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <h1 className="text-4xl font-bold mb-3">
          Day Two of Our On-the-Job Training (OJT): Laying the Groundwork and
          Overcoming Git Hurdles
        </h1>
        <div className="text-sm text-gray-400 mb-8">June 13, 2023</div>

        <div className="prose prose-invert max-w-none blog-content">
          <p>
            The second day of our On-the-Job Training was when things started to
            feel real. Unlike the first day, which mostly revolved around
            introductions and planning, this day was all about execution. We
            were officially stepping into the development phase, and it was time
            to lay the technical groundwork for the system we were about to
            build.
          </p>

          <p>
            We began the day with a short team meeting. Even though it was
            brief, the discussion was crucial. We talked about how we would
            collaborate as a team of developers working on a single codebase.
            Since this was the first time some of us would be working in a team
            environment myself included we needed to carefully decide how we
            would use Git and GitHub.
          </p>

          <p>
            After a productive back-and-forth, we agreed to adopt{" "}
            <strong>trunk-based development</strong> as our Git workflow. The
            idea was simple: keep the <code>main</code> branch stable and
            production-ready, and create short-lived branches for features or
            fixes. This would help us avoid long, messy merge conflicts and
            allow us to ship updates faster. It sounded great in theory until we
            actually tried to implement it.
          </p>

          <p>
            Once the workflow was decided, I volunteered to set up the{" "}
            <strong>Django development environment</strong> and initialize the
            GitHub repository. I scaffolded the Django project locally and began
            organizing the folder structure. I added essential files like{" "}
            <code>.gitignore</code>, <code>README.md</code>, and even a simple
            Git workflow guide so everyone could refer to it when needed. So
            far, so good.
          </p>

          <p>
            However, the moment we all started to clone the repo and push our
            first commits,
            <strong>things quickly spiraled into confusion</strong>.
          </p>

          <h2>Git Confusion Begins</h2>

          <p>
            At first, one of my teammates accidentally pushed their changes
            directly to the <code>main</code> branch without pulling the latest
            version. This caused a conflict when another teammate tried to push
            their updates as well. Then someone accidentally committed from the
            wrong directory, causing unnecessary files to be tracked. Another
            one of us forgot to switch to a feature branch and unknowingly
            started making changes to the main branch.
          </p>

          <p>
            Suddenly, our GitHub history was cluttered with odd commit messages,
            conflicting file changes, and unnecessary files that shouldn't have
            been tracked in the first place. It was chaos.
          </p>

          <p>
            To make things worse, Git started throwing intimidating error
            messages that we didn't fully understand yet:
          </p>

          <ul>
            <li>"You need to pull before you can push"</li>
            <li>"Merge conflict in settings.py"</li>
            <li>"fatal: refusing to merge unrelated histories"</li>
          </ul>

          <p>We felt overwhelmed.</p>

          <p>
            For a moment, we just stared at our screens, unsure of what to do.
            It felt like the day was slipping away with no real progress. This
            was especially frustrating because we were so eager to begin actual
            development. But we reminded ourselves that these hiccups were part
            of the learning process.
          </p>

          <h2>Solving the Chaos</h2>

          <p>
            We took a step back and decided to regroup. We jumped on a quick
            voice call to sort things out together. I shared my screen, and we
            began untangling the mess one step at a time.
          </p>

          <p>
            First, we <strong>reset the main branch</strong> to a clean state.
            Then, we deleted the problematic commits and restored the correct
            folder structure. After that, we had a short crash course on the{" "}
            <strong>best Git practices</strong> we should follow moving forward:
          </p>

          <ul>
            <li>Always pull the latest changes before starting any work.</li>
            <li>Create a new branch for every task, no matter how small.</li>
            <li>
              Never commit directly to the <code>main</code> branch.
            </li>
            <li>Write clear commit messages.</li>
            <li>Regularly push and pull changes to avoid falling behind.</li>
          </ul>

          <p>
            I then demonstrated how to resolve a merge conflict using VS Code,
            explaining what the conflict markers meant (
            <code>&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>======</code>,{" "}
            <code>&gt;&gt;&gt;&gt;&gt;&gt;</code>) and how to choose which
            changes to keep.
          </p>

          <p>
            Once everything was back in order, each member practiced creating
            their own branch, making small changes, committing them, and opening
            a pull request on GitHub. We reviewed and merged each other's PRs,
            getting a feel for what a real development workflow would look like.
          </p>

          <p>
            By the end of the day, we had a stable, working repository with a
            properly structured Django project, a functional GitHub flow, and a
            shared understanding of how to collaborate without breaking things.
            Most importantly, we gained confidence and experience from the
            struggle.
          </p>

          <h2>Django Familiarization Begins</h2>

          <p>
            With the Git issues resolved, we used the remaining time to explore
            Django. Since this was the first time most of us would be working
            with this framework, we decided to spend the next few days
            familiarizing ourselves with its core concepts. Me and the other
            front-end developer started reading documentation and watching
            tutorials on how Django handles templates, URLs, views, and static
            files. Even our project manager joined in, eager to better
            understand how the system would work so she could document it
            effectively and manage our progress.
          </p>

          <h2>Conclusion</h2>

          <p>
            Day two was a roller coaster. We started off excited, stumbled into
            a pit of Git-related confusion, but climbed out stronger and more
            knowledgeable. It reminded us that building software isn't just
            about writing code it's about communication, coordination, and
            continuous learning.
          </p>

          <p>
            Now that we've laid the technical foundation and tackled our first
            real challenge as a team, we're more prepared than ever to move
            forward. Tomorrow, we plan to start breaking down the system
            requirements and assigning tasks. One step closer to building
            something impactful.
          </p>
        </div>
      </div>
    </ScrollLinked>
  );
}

export default DayTwo;
