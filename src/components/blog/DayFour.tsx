import ScrollLinked from "./ScrollLinked";

export function DayFour() {
  return (
    <ScrollLinked>
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <h1 className="text-4xl font-bold mb-3">
          Day Four of Our On-the-Job Training (OJT): Implementing Document Tracking and User Roles
        </h1>
        <div className="text-sm text-gray-400 mb-8">June 15, 2023</div>

        <div className="prose prose-invert max-w-none blog-content">
          <p>
            As we moved into Day Four of our OJT, our team was ready to dive into the real 
            meat of the project developing the core feature of the system: the document tracking 
            module. After three days of planning, setup, and aligning responsibilities, today 
            was the first time we truly felt like a development team working toward a shared goal. 
            With our Django environment stable and our Git workflow running smoothly, it was time 
            to translate our ideas into functional code.
          </p>

          <p>
            We began the day with a brief internal meeting to align on priorities. Our focus was 
            on two main components: the document tracking system and user role management. These 
            were essential to get right from the start, as everything else in the project would 
            build around them. The document tracking module needed to support uploading new documents, 
            assigning a unique tracking code, tagging documents as either incoming or outgoing, and 
            allowing updates on their status (e.g., pending, forwarded, received, completed). We 
            decided that each document should also include a timestamp, the name of the staff who 
            filed or updated it, and a description of the document's contents.
          </p>

          <p>
            Our backend developer took the lead on defining the database models. He created a Document 
            model in Django with fields for title, type, description, status, date received, and 
            associated user. Meanwhile, I began setting up the front-end templates for adding and 
            viewing documents. We created simple forms using Django's built-in form system to allow 
            staff to input and update document information. There were a few hiccups like getting 
            form validation to work properly and ensuring that user-submitted data was safely stored—but 
            after testing with sample entries, the basic functionality started coming together.
          </p>

          <p>
            Simultaneously, we also tackled user role management. The Office of the President requested 
            that the system have at least two roles: administrators and office staff. Admins would have 
            access to all data and system features, including editing and deleting records, while staff 
            members would have more limited permissions, mostly focused on adding and tracking documents. 
            To implement this, we used Django's built-in User model and Group permissions. We created 
            two groups, Admin and Staff and wrote logic to restrict certain views based on the user's 
            group. At first, we struggled a bit with permission settings and figuring out how to redirect 
            users with limited access. Our frontend teammate accidentally exposed the admin-only dashboard 
            to all users, which we quickly fixed with conditional rendering and login-required decorators.
          </p>

          <p>
            Throughout the day, we were constantly testing and reviewing each other's code. There were a 
            few conflicts during merge attempts, especially when two of us edited the same HTML template, 
            but by now we had developed the discipline to pull first, communicate changes, and review 
            commits before pushing to the main branch. Our project manager also helped test features and 
            provided feedback on usability. She reminded us to keep the interface intuitive for non-technical 
            users, which led us to simplify some of the buttons and rearrange the form layout for better flow.
          </p>

          <p>
            By the end of the day, we had a working document tracker that allowed basic data entry and 
            displayed a list of all submitted documents. We also had user roles functioning correctly—admins 
            could access everything, while staff had a limited but functional interface. We're far from done, 
            but seeing the system respond to actual user inputs and start reflecting real office processes 
            was incredibly motivating. Each of us could now see our individual contributions adding up to a 
            bigger, more meaningful solution.
          </p>

          <p>
            We ended the day with a short reflection call. Everyone felt proud of the progress we made. It 
            wasn't a flawless day, bugs were caught, logic was debugged, and roles were misunderstood at 
            times but we kept learning, adapting, and moving forward. Our next goal is to enhance the 
            tracking system with search and filtering capabilities, and to begin working on archiving and 
            report generation features. As the days go by, this OJT experience is not just teaching us 
            about software development, but also about communication, discipline, and working as a team. 
            And that, we believe, is just as important.
          </p>
        </div>
      </div>
    </ScrollLinked>
  );
}

export default DayFour;
