import Cal from "../icons/cal";
import ContentImage from "./image";

export default function () {
  return (
    <div className="pt-4">
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
            <strong>Projects</strong> allow you to organize similar tasks based
            on instructions and task types. All projects will share the same
            instructions and annotation rules.
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
            <a href="#section-create-new-projects" className="fa fa-anchor"></a>
          </h1>
        </div>
        <div className="magic-block-textarea">
          <p>
            To create a new project, you can click on the
            <strong>+ </strong>button on the left hand navigation or on the{" "}
            <strong>New</strong> button on the right hand bar
          </p>
        </div>
        <ContentImage url={"https://files.readme.io/4d89660-Project.png"} />
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
                  A project is tied to one specific Task Type, such as “2D Box
                  Annotation”.{" "}
                </strong>
                You cannot change a project’s task type after you have created
                the project.
              </li>
              <li>
                <strong>
                  All tasks in a project should have the same instructions.
                </strong>
              </li>
              <li>
                <strong>
                  Please do change instructions significantly within a project.{" "}
                </strong>
                If instructions need to be changed significantly, please create
                a new project.
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
            In addition, you can sort projects by name, task type, and creation
            date!
          </p>
        </div>
        <ContentImage
          url={
            "https://files.readme.io/96a9a2c-Screen_Shot_2020-08-11_at_1.50.59_PM.png"
          }
        />
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-300 pt-2 mt-6 flex items-center border-t border-gray-300 dark:border-gray-800">
        <span className="mr-1">
          <Cal />
        </span>
        Updated 7 months ago
      </div>
    </div>
  );
}
