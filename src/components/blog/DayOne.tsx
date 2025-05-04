// import React from "react";
import ScrollLinked from "./ScrollLinked";

export function DayOne() {
  return (
    <ScrollLinked>
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <h1 className="text-4xl font-bold mb-3">
          Day One: On the Job Training(OJT)
        </h1>
        <div className="text-sm text-gray-400 mb-8">June 12, 2023</div>

        <div className="prose prose-invert max-w-none blog-content">
          <p>
            As a graduating Information Technology student at Western Mindanao
            State University, undergoing On-the-Job Training (OJT) marks the
            final milestone before we step into the real world. It serves as the
            ultimate requirement that transitions us from being students into
            future professionals. The university took charge of forming student
            groups and assigning them to various offices where we would complete
            the required number of hours and fulfill our individual roles.
          </p>

          <p>
            Our group is composed of four members, and we were deployed by our
            OJT adviser to none other than the Office of the President.
            Honestly, I was shocked when I first heard the news. It was
            unexpected, and quite nerve wracking to learn that we would be
            directly assisting and receiving guidance from the university
            president herself. It was a huge responsibility, and the pressure
            was real. We were also anxious about the kind of system they might
            ask us to build. Still, despite the nervousness, I had faith in our
            team's capabilities. I knew we were ready for the challenge ahead.
          </p>

          <p>
            After forming our group, we took some time to get to know one
            another better specifically, each other's strengths and programming
            specialties. Fortunately, our team turned out to be well-balanced.
            Two of us specialize in front-end web development using HTML, CSS,
            and JavaScript. Another member has solid experience in back-end
            development using the Django framework with Python. The final member
            of the group took on the role of project manager, responsible for
            tracking our progress and handling the documentation of our work.
          </p>

          <p>
            Later that day, our OJT adviser accompanied us to the President's
            office. Upon arrival, we were welcomed by the President's secretary,
            and soon after, the President herself greeted us warmly. We had a
            short but insightful meeting where the President explained the
            primary issue her office was facing: managing and tracking the large
            volume of documents coming in and out. With limited staff and no
            existing system to streamline the process, the workload was
            overwhelming, particularly for the office clerk assigned to handle
            all the documentation.
          </p>

          <p>
            We were asked to develop a web-based application that would help the
            office efficiently track and manage documents. The goal was to
            reduce the manual workload and ensure better organization of
            records, ultimately improving productivity and relieving the
            pressure on the staff.
          </p>

          <p>
            We also took that opportunity to ask several questions to better
            understand the requirements. After about an hour of discussion, the
            meeting concluded. Unlike traditional OJT setups where students
            report to the office daily, our arrangement allows us to work from
            home. We are expected to submit weekly progress reports detailing
            the tasks we completed. Additionally, we are scheduled to meet in
            person with our adviser and the client every Thursday to provide
            updates and discuss any concerns.
          </p>

          <p>
            After regrouping and further deliberation within our team, we
            decided to use the Django framework for the back-end development,
            while the front-end will be built using HTML, CSS, and vanilla
            JavaScript. This tech stack aligns well with our skills and the
            system requirements discussed in the meeting.
          </p>

          <p>
            That concluded our first day of OJT. While we didn't do much coding
            yet, the initial meeting set a clear direction for the project. We
            ended the day with a sense of excitement and a bit of nervousness,
            but more importantly, with motivation to begin building a solution
            that could truly make a difference.
          </p>
        </div>
      </div>
    </ScrollLinked>
  );
}

export default DayOne;
