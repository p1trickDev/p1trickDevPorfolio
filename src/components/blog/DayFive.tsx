import ScrollLinked from "./ScrollLinked";

export function DayFive() {
  return (
    <ScrollLinked>
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <h1 className="text-4xl font-bold mb-3">
          Day Five of Our On-the-Job Training (OJT): Progress Report and
          Real-World Insights
        </h1>
        <div className="text-sm text-gray-400 mb-8">June 16, 2023</div>

        <div className="prose prose-invert max-w-none blog-content">
          <p>
            Day Five marked a shift in pace for our OJT journey. Instead of
            staying at home to continue coding and developing the system, our
            team went back to campus to submit our weekly progress report and
            attend a scheduled meeting with our OJT adviser. It was a day less
            about building and more about evaluating, reflecting, and learning
            from those actually dealing with the problems we aim to solve.
          </p>

          <p>
            We arrived at school early, all of us a bit anxious but excited to
            share what we had accomplished so far. During the meeting, our
            adviser asked each group to present their current progress. When it
            was our turn, we explained how far we had gone with the development:
            the Django environment was fully set up, our Git workflow was
            running smoothly, and we had implemented the core structure of the
            document tracking system. We also highlighted the features we had
            completed, such as user authentication, basic user roles, and the
            initial setup of document submission and status tracking.
          </p>

          <p>
            Our adviser listened carefully and gave encouraging feedback, but
            also asked a few thought-provoking questions, mainly about how the
            system will handle edge cases, such as lost documents,
            re-submissions, or delayed status updates. These questions made us
            realize that while we were on the right track technically, we needed
            more insight into the actual workflow of the people who would be
            using the system daily.
          </p>

          <p>
            After the class meeting, we took the initiative to do some
            additional data gathering. We visited the College of Computing
            Studies, where we interviewed one of the office clerks who handles
            administrative documents, similar to the role of the clerk in the
            Office of the President. We asked how they managed incoming and
            outgoing files, what their common pain points were, and what kind of
            features they wished they had in a system like ours. The
            conversation was eye opening. The clerk mentioned how difficult it
            was to monitor documents passed between departments, especially when
            multiple copies and signatures were involved. She also noted how
            much time was lost just trying to track down documents that were
            misplaced or forgotten.
          </p>

          <p>
            We realized then that even the smallest detail—like a missed date or
            an unclear status can disrupt the entire workflow in an office
            setting. The clerk also brought up the need for an alert system or
            notifications to prompt follow ups on pending files. These were
            things we hadn't originally thought about, but they made perfect
            sense coming from someone on the frontlines of document handling.
          </p>

          <p>
            After gathering this valuable input, our team regrouped at a quiet
            spot on campus for a short meeting to discuss everything we had
            learned. We shared our notes, reviewed our existing feature list,
            and began identifying areas where we could improve or expand the
            system. Some new ideas were proposed, such as adding a history log
            for each document's movement, a reminder system for pending tasks,
            and an interface specifically tailored for clerks that simplified
            their daily routine.
          </p>

          <p>
            It was a productive day, not just because of the updates we
            reported, but because we connected the technical work we were doing
            with the real-world processes it was meant to support. There's a
            difference between building a system and building the right
            system—and today reminded us of that. With fresh insights and a
            clearer understanding of the workflow we're designing for, we're
            ready to refine our plan and continue development with greater
            purpose and direction.
          </p>
        </div>
      </div>
    </ScrollLinked>
  );
}

export default DayFive;
