import ScrollLinked from "./ScrollLinked";

export function DaySix() {
  return (
    <ScrollLinked>
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <h1 className="text-4xl font-bold mb-3">
          Day Six of Our On-the-Job Training (OJT): Turning Feedback Into
          Features
        </h1>
        <div className="text-sm text-gray-400 mb-8">June 17, 2023</div>

        <div className="prose prose-invert max-w-none blog-content">
          <p>
            After a full day of gathering insights and re-evaluating our design,
            Day Six was all about turning feedback into action. With our minds
            full of real-world scenarios and workflow challenges shared by the
            clerk we interviewed, our team was eager to improve the system and
            make it truly useful—not just functional.
          </p>

          <p>
            We began the day by reviewing the key points from yesterday's
            meeting and interview. The biggest takeaway was that document
            tracking wasn't just about recording information—it was about
            following the movement of each document from the moment it was
            received to the moment it was completed. The clerk mentioned that
            they often lost track of where a document was, who had it, or what
            stage it was in. That's when we realized our system needed something
            more than just a "status" field—it needed a history log.
          </p>

          <p>
            So, our back-end developer got to work designing a DocumentHistory
            model in Django. This model would track every action related to a
            document—who accessed or updated it, what changes were made, and
            when it happened. We made sure each entry would include a timestamp
            and a brief description of the action. Once that was set up, we
            linked the model to our existing Document model so that every update
            would be recorded automatically. This addition gave the system the
            ability to track a document's lifecycle, which could become crucial
            for accountability and follow-ups.
          </p>

          <p>
            While that was happening, I focused on improving the user interface.
            We wanted the history log to be easy to read and accessible only to
            users with the proper permissions. I created a new section in the
            document details view to show the full movement trail of the file.
            This way, admins and clerks could review a document's entire
            journey, from submission to completion with just a few clicks. It
            wasn't just helpful—it was empowering for the staff who often had to
            rely on memory or incomplete records.
          </p>

          <p>
            Meanwhile, our other front-end developer worked on implementing a
            basic notification system. We decided to start with a simple
            reminder feature if a document stayed in a "pending" state for too
            long (e.g., more than three days), a notification would appear for
            admins when they logged in. It's a small step, but it's one that
            already gives the system more responsiveness. Eventually, we plan to
            expand this to email alerts or scheduled reports, but for now, we
            focused on building a working proof of concept.
          </p>

          <p>
            Our project manager updated our documentation to include these new
            features and their purpose. She also revised the user stories to
            reflect more accurate real-life scenarios, incorporating what we
            learned from the clerk interview. For example, one story described a
            situation where a document was submitted, passed through three
            departments, and completed—all tracked through the history log. It
            gave us a clearer vision of how each module interacts and where we
            need to optimize.
          </p>

          <p>
            Of course, we hit a few bumps throughout the day. We had a small
            issue where multiple history entries were recorded even if nothing
            really changed, which we had to fix by adding conditions to our
            update triggers. Another minor bug involved the new notification
            logic running for users who didn't have permission to see document
            statuses, but we resolved that quickly with a simple permission
            check.
          </p>

          <p>
            Despite these challenges, today felt different. The features we
            worked on weren't just boxes to check they were meaningful additions
            inspired by real people with real needs. There was something
            satisfying about watching the system evolve into something more
            thoughtful, more tailored, and more capable. We didn't just code
            today we listened, adapted, and responded.
          </p>

          <p>
            Tomorrow, we plan to continue refining the document tracking flow
            and start working on search and filtering features, which will allow
            users to quickly find files based on keywords, dates, or document
            types. Each day, our system gets a little better and each step
            brings us closer to delivering something we can be proud of.
          </p>
        </div>
      </div>
    </ScrollLinked>
  );
}

export default DaySix;
