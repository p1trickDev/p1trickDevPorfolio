import ScrollLinked from "./ScrollLinked";

export function DaySeven() {
  return (
    <ScrollLinked>
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <h1 className="text-4xl font-bold mb-3">
          Day Seven of Our On-the-Job Training (OJT): Small Wins, Big Lessons
        </h1>
        <div className="text-sm text-gray-400 mb-8">June 18, 2023</div>

        <div className="prose prose-invert max-w-none blog-content">
          <p>
            Day Seven was one of those slower, more challenging days where
            progress didn't come easy, but when it finally did, it was
            incredibly satisfying. We didn't get to do everything we originally
            planned, but the effort we poured into fixing a persistent issue
            taught us more than we expected.
          </p>

          <p>
            The day began optimistically. We had planned to focus on refining
            the system's interface and implement both search and filtering
            features. However, our plans quickly shifted when we ran into a
            series of problems while trying to improve the basic notification
            system we introduced earlier.
          </p>

          <p>
            The goal of the notification system was simple: alert users when a
            document stays in a pending state for too long. We had implemented a
            version of this before, but it wasn't reliable. Notifications were
            either showing up at the wrong time or not at all. Initially, we
            thought it would be a quick fix, but as we started digging deeper,
            we realized the issue was more complicated.
          </p>

          <p>
            We spent most of the morning debugging our Django logic. There were
            problems with how we calculated the document age, how we queried the
            database, and how we displayed alerts only to the correct users. At
            one point, notifications were being triggered for all users
            regardless of their role, which clearly wasn't what we wanted. In
            another case, documents with the right conditions weren't showing up
            in the alert list at all.
          </p>

          <p>
            To solve the issue, we broke the problem down step-by-step. Our
            backend developer refactored the logic to more accurately calculate
            the number of days since a document was last updated. We introduced
            a scheduled check that runs each time a user logs in, and filters
            only those documents that truly meet the criteria pending status, no
            updates in the last three days, and visible only to authorized
            roles. Meanwhile, I tested and adjusted the frontend display, making
            sure the alert box appeared clearly and consistently without
            breaking the layout.
          </p>

          <p>
            There were moments when it felt like we were going in circles, but
            after several hours of testing, tweaking, and rechecking our logic,
            the system finally worked as intended. When we logged in as an admin
            with documents stuck in pending, the notification showed up exactly
            as we hoped. It may not have been a major feature rollout, but
            fixing that notification system felt like a huge win for us as a
            team.
          </p>

          <p>
            Because most of our day was spent fixing that one issue, we had to
            put the search and filtering features on hold. We updated our todo
            list and adjusted our timelines slightly to make space for those
            tasks on the next working day. While we didn't make as much visible
            progress today, we still felt accomplished—solving bugs like these
            is part of real development, and it reminded us that growth often
            comes from struggle.
          </p>

          <p>
            In the end, it was a quiet but meaningful day. We didn't check off
            everything from our to-do list, but we strengthened our system,
            improved our problem-solving as a team, and built the kind of
            resilience that matters most in the long run. Tomorrow, we'll return
            to our search and filtering tasks with fresh energy and fewer bugs
            in the way.
          </p>
        </div>
      </div>
    </ScrollLinked>
  );
}

export default DaySeven;
