import ScrollLinked from "./ScrollLinked";

export function DayThree() {
  return (
    <ScrollLinked>
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <h1 className="text-4xl font-bold mb-3">
          Day Three of Our On-the-Job Training (OJT): Planning Features and
          Starting Development
        </h1>
        <div className="text-sm text-gray-400 mb-8">June 14, 2023</div>

        <div className="prose prose-invert max-w-none blog-content">
          <p>
            Day Three marked a turning point in our OJT journey, as we
            transitioned from preparation to actual development. After the
            technical hiccups we faced with Git on Day Two, we returned with a
            better understanding of our tools and a renewed sense of purpose.
            Our first task for the day was a virtual meeting that brought
            together our team, our OJT adviser, and a representative from the
            Office of the President. During this meeting, we revisited the main
            goal of our project: to create a web-based document tracking system
            that would streamline the flow of incoming and outgoing files within
            the office. They explained their current struggles with tracking
            documents manually using logbooks, which often led to lost files,
            tracking errors, and delays. Their limited staff couldn't keep up
            with the volume of work, so they were hoping our system could help
            alleviate that burden.
          </p>

          <p>
            To better understand the scope of the system, we asked several
            clarifying questions—what information needed to be recorded per
            document, the roles of staff members, whether they needed search
            functionality, and if the system should support reporting or audit
            logs. From that discussion, we identified the core modules that
            would define the system: user management, document entry and
            tracking, search and filtering tools, archiving, audit logs, and a
            simple dashboard to give users an overview of activity.
          </p>

          <p>
            Once the client meeting concluded, our team gathered internally to
            turn those ideas into an actual development plan. We created a
            project board using GitHub Projects and broke the system down into
            manageable features, assigning tasks based on each member's
            strengths. I was tasked with setting up the base layout using
            Django's templating engine and handling the user authentication
            flow. My fellow front-end developer began building out the login UI
            using HTML, CSS, and vanilla JavaScript. Meanwhile, our back-end
            developer focused on creating the database models for users and
            documents, and also configured Django's built-in admin interface for
            testing and data validation. Our project manager started documenting
            the system requirements, including the user flow diagrams and role
            definitions, while also maintaining the task board and coordinating
            weekly milestones.
          </p>

          <p>
            Despite our progress, we still ran into a few snags during the day.
            Our front-end developer struggled a bit with Django's static file
            configuration, which is a common challenge for newcomers. I spent
            more time than I care to admit trying to figure out why my model
            wasn't showing up in the admin panel only to realize I'd forgotten
            to register it in admin.py. We even encountered another minor Git
            conflict when one of us forgot to pull before pushing. But this
            time, we knew how to handle it. We resolved the issue quickly with a
            rebase and a proper merge. Every mistake was met with teamwork and
            patience, and we made it a point to treat each challenge as a
            valuable lesson.
          </p>

          <p>
            By the end of the day, we had a working login system, functional
            Django models, a structured development plan, and a stronger sense
            of how we'd move forward. It felt good to finally see the project
            take shape after spending the first two days laying the groundwork.
            With our tools in place and our roles clearly defined, we're more
            motivated than ever to bring this system to life. Tomorrow, we plan
            to begin developing the document tracking and data entry modules—the
            core features that will bring the most value to our client. We know
            the road ahead won't be easy, but today proved that we can handle
            it, one step at a time.
          </p>
        </div>
      </div>
    </ScrollLinked>
  );
}

export default DayThree;
