export default function Home() {
  return (
    <div className="BodyContent_bodyContent__1sPhX bg-white dark:bg-gray-900 w-3/4">
      <header className=" lg:flex h-20 pl-8 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 relative">
        <div className="BodyContent_inputWrapper__WPJDv mr-2">
          <div
            className="bg-white dark:bg-gray-900 flex items-center py-1 px-2 text-gray-700 dark:text-gray-300 border border-gray-300 rounded-1 dark:border-gray-600"
            style={{ width: "100%" }}
          >
            <span className="mr-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
                style={{ color: "inherit" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8787 3.75785C14.8084 3.75243 17.9984 6.93365 18.0039 10.8633C18.006 12.3971 17.5124 13.8905 16.5968 15.1209L20.4432 18.3743C21.0608 18.9014 21.1342 19.8294 20.6071 20.4471C20.08 21.0647 19.152 21.1381 18.5344 20.611C18.4755 20.5608 18.4207 20.506 18.3704 20.4471L15.1163 16.6013C11.9563 18.9433 7.49604 18.2802 5.15405 15.1202C2.81204 11.9602 3.47514 7.49998 6.63511 5.158C7.86281 4.24808 9.35064 3.7572 10.8788 3.75786L10.8787 3.75785ZM10.8787 16.5079C13.9854 16.5079 16.5037 13.9895 16.5037 10.8829C16.5037 7.77625 13.9854 5.25785 10.8787 5.25785C7.77215 5.25785 5.25375 7.77625 5.25375 10.8829V10.8828C5.25375 13.9894 7.77213 16.5078 10.8787 16.5078L10.8787 16.5079Z"
                ></path>
              </svg>
            </span>
            <input
              type="search"
              tabIndex="-1"
              className="bg-transparent w-full text-sm text-gray-700 dark:text-gray-300 placeholder-current p-0 m-0"
              placeholder="Start typing to search..."
              value=""
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="flex">
          <a
            href="https://dashboard.scale.com/signup"
            className="bg-black dark:bg-pink font-medium tracking-03 text-white px-2 leading-4 inline-block rounded-3 whitespace-nowrap uppercase mr-3 last:mr-0"
            style={{ fontSize: "13px" }}
          >
            Create an Account
          </a>
          <a
            className="bg-gray-300 dark:bg-white font-medium tracking-03 text-black px-2 leading-4 inline-block rounded-3 whitespace-nowrap uppercase mr-3 last:mr-0"
            style={{ fontSize: "13px" }}
            href="/sales"
          >
            Talk to Us
          </a>
        </div>
      </header>
      <div className="lg:pl-8 pb-8">
        <div className="Main_content__1OWyo pt-4">
          <div className="font-maax text-4xl text-black dark:text-white pb-4 mb-4 border-b border-gray-300 dark:border-gray-800">
            Manage your Projects
          </div>
          <div>
            <div className="magic-block-api-header">
              <h1 className="header-scroll is-api-header">
                <span id="overview"></span>
                <div id="section-overview" className="anchor waypoint"></div>
                Overview
                <a href="#section-overview" className="fa fa-anchor"></a>
              </h1>
            </div>
            <div className="magic-block-textarea">
              <p>
                <strong>Projects</strong> allow you to organize similar tasks
                based on instructions and task types. All projects will share
                the same instructions and annotation rules.
              </p>
            </div>
            <div className="magic-block-api-header">
              <h1 className="header-scroll is-api-header">
                <span id="create-new-projects"></span>
                <div
                  id="section-create-new-projects"
                  className="anchor waypoint"
                ></div>
                Create New Projects
                <a
                  href="#section-create-new-projects"
                  className="fa fa-anchor"
                ></a>
              </h1>
            </div>
            <div className="magic-block-textarea">
              <p>
                To create a new project, you can click on the
                <strong>+ </strong>button on the left hand navigation or on the{" "}
                <strong>New</strong> button on the right hand bar
              </p>
            </div>
            <div className="magic-block-image">
              <figure>
                <a
                  href="https://files.readme.io/4d89660-Project.png"
                  className="block-display-image-parent block-display-image-size-smart"
                >
                  <img src="https://files.readme.io/4d89660-Project.png" />
                </a>
              </figure>
            </div>
            <div className="magic-block-callout type-info">
              <h3>
                <i title="Info" className="fa fa-info-circle"></i>
                Important things to know about projects
              </h3>
              <div className="callout-body">
                <ul>
                  <li>
                    <strong>Projects cannot be deleted </strong>
                  </li>
                  <li>
                    <strong>
                      A project is tied to one specific Task Type, such as “2D
                      Box Annotation”.{" "}
                    </strong>
                    You cannot change a project’s task type after you have
                    created the project.
                  </li>
                  <li>
                    <strong>
                      All tasks in a project should have the same instructions.
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Please do change instructions significantly within a
                      project.{" "}
                    </strong>
                    If instructions need to be changed significantly, please
                    create a new project.
                    <ul>
                      <li>
                        Examples of significant changes:
                        <ul>
                          <li>Adding/removing labels</li>
                          <li>Changing the intent of a project entirely</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="magic-block-api-header">
              <h1 className="header-scroll is-api-header">
                <span id="manage-your-projects"></span>
                <div
                  id="section-manage-your-projects"
                  className="anchor waypoint"
                ></div>
                Manage Your Projects
                <a
                  href="#section-manage-your-projects"
                  className="fa fa-anchor"
                ></a>
              </h1>
            </div>
            <div className="magic-block-textarea">
              <p>
                To manage all of the projects, click on the three
                <strong>ellipsis</strong> on the left hand navigation or on the{" "}
                <strong>Manage</strong> button on the right hand bar.
              </p>
              <p>Within the "Manage Projects" view, you are able to edit:</p>
              <ol>
                <li value="1">Project name</li>
                <li value="2">Instructions</li>
                <li value="3">Pin projects to the top</li>
              </ol>
              <p>
                In addition, you can sort projects by name, task type, and
                creation date!
              </p>
            </div>
            <div className="magic-block-image">
              <figure>
                <a
                  href="https://files.readme.io/96a9a2c-Screen_Shot_2020-08-11_at_1.50.59_PM.png"
                  className="block-display-image-parent block-display-image-size-smart"
                >
                  <img src="https://files.readme.io/96a9a2c-Screen_Shot_2020-08-11_at_1.50.59_PM.png" />
                </a>
              </figure>
            </div>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 pt-2 mt-6 flex items-center border-t border-gray-300 dark:border-gray-800">
            <span className="mr-1">
              <svg
                className="fill-current text-gray-700 dark:text-gray-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 3.75V5.25C9 5.66421 8.66421 6 8.25 6C7.83579 6 7.5 5.66421 7.5 5.25V3.75C7.5 3.33579 7.83579 3 8.25 3C8.66421 3 9 3.33579 9 3.75ZM20.25 6V18.75C20.25 19.5784 19.5784 20.25 18.75 20.25H5.25C4.42157 20.25 3.75 19.5784 3.75 18.75V6C3.75 5.17157 4.42157 4.5 5.25 4.5H6.375C6.58211 4.5 6.75 4.66789 6.75 4.875V5.18558V5.18558C6.73686 5.97403 7.32017 6.6456 8.1027 6.74295C8.92727 6.82418 9.66155 6.22158 9.74277 5.39702C9.74759 5.34816 9.75 5.29909 9.75 5.25V4.875C9.75 4.66789 9.91789 4.5 10.125 4.5H13.875C14.0821 4.5 14.25 4.66789 14.25 4.875V5.18557V5.18557C14.2369 5.974 14.8201 6.64555 15.6026 6.74295C16.4272 6.8242 17.1615 6.22161 17.2428 5.39703C17.2476 5.34817 17.25 5.2991 17.25 5.25V4.875C17.25 4.66789 17.4179 4.5 17.625 4.5H18.75C19.5784 4.5 20.25 5.17157 20.25 6C20.25 6 20.25 6 20.25 6V6ZM18.375 10.5H5.625C5.41789 10.5 5.25 10.6679 5.25 10.875V18.375C5.25 18.5821 5.41789 18.75 5.625 18.75H18.375C18.5821 18.75 18.75 18.5821 18.75 18.375V10.875C18.75 10.6679 18.5821 10.5 18.375 10.5ZM15.75 3C16.1642 3 16.5 3.33579 16.5 3.75V5.25C16.5 5.66421 16.1642 6 15.75 6C15.3358 6 15 5.66421 15 5.25V3.75C15 3.33579 15.3358 3 15.75 3Z"
                ></path>
              </svg>
            </span>
            Updated 7 months ago
          </div>
        </div>
      </div>
    </div>
  );
}
