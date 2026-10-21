const auth = { id: "remote_authorized", label: "Are you authorized to work remotely full time?", type: "radio", options: ["Yes","No"] };
const yrs = tool => ({ id: "years_experience", label: `How many years of experience do you have with ${tool}?`, type: "select", options: ["Less than 1","1-2","3-5","5+"] });
module.exports = [
{
  slug: "qa-automation-engineer",
  title: "QA Automation Engineer",
  location: "Remote", type: "Full-time",
  salary: "$95,000 – $125,000 USD / year",
  summary: "Build and maintain end-to-end and API test automation for our web app.",
  responsibilities: [
    "Write and maintain end-to-end tests in Playwright with TypeScript",
    "Run tests on every pull request with GitHub Actions",
    "Build API test collections in Postman and run them with Newman",
    "Write load tests in k6 for key services",
    "Report bugs clearly and work with developers to fix them"
  ],
  requirements: [
    "3+ years of test automation experience",
    "2+ years with Playwright and TypeScript",
    "Experience setting up CI pipelines in GitHub Actions",
    "Experience testing REST APIs with Postman/Newman",
    "Familiarity with k6 or other load testing tools"
  ],
  tools: ["Playwright","TypeScript","GitHub Actions","Postman","Newman","k6"],
  questions: [yrs("Playwright"), auth]
},
{
  slug: "senior-test-engineer",
  title: "Senior Test Engineer",
  location: "Remote", type: "Full-time",
  salary: "$120,000 – $150,000 USD / year",
  summary: "Lead our Java test framework across web and mobile and mentor the QA team.",
  responsibilities: [
    "Own and extend our Selenium WebDriver framework in Java with TestNG",
    "Automate Android and iOS tests with Appium",
    "Maintain nightly regression pipelines in Jenkins",
    "Run performance tests with Apache JMeter before major releases",
    "Manage test plans and reporting in Jira with Xray"
  ],
  requirements: [
    "6+ years in software testing, 4+ in automation with Java",
    "Strong experience with Selenium WebDriver and TestNG",
    "Hands-on Appium experience on Android and iOS",
    "Experience maintaining Jenkins pipelines",
    "Experience with Jira and Xray test management"
  ],
  tools: ["Selenium WebDriver","Java","TestNG","Appium","Jenkins","Apache JMeter","Jira","Xray"],
  questions: [yrs("Selenium WebDriver and Java"), auth]
},
{
  slug: "zookeeper-engineer",
  title: "Zookeeper Engineer",
  location: "Remote", type: "Full-time",
  salary: "$105,000 – $135,000 USD / year",
  summary: "Run our Apache ZooKeeper and Kafka infrastructure and the sensor platform behind our partner wildlife sanctuary.",
  responsibilities: [
    "Operate and scale our Apache ZooKeeper and Apache Kafka clusters on Kubernetes",
    "Manage infrastructure as code with Terraform",
    "Maintain the IoT sensor platform (MQTT, AWS IoT Core) used for enclosure monitoring",
    "Build dashboards and alerts in Datadog and handle on-call through PagerDuty",
    "Write and maintain internal services in Go"
  ],
  requirements: [
    "4+ years in SRE, platform, or infrastructure engineering",
    "Production experience with Apache ZooKeeper and Apache Kafka",
    "Strong Terraform and Kubernetes skills",
    "Experience with Datadog monitoring and alerting",
    "Ability to write production services in Go"
  ],
  tools: ["Apache ZooKeeper","Apache Kafka","Kubernetes","Terraform","MQTT","AWS IoT Core","Datadog","PagerDuty","Go"],
  questions: [yrs("Apache ZooKeeper and Kafka"), auth]
}
];
const yrs2 = tool => ({ id: "years_experience", label: `How many years of experience do you have with ${tool}?`, type: "select", options: ["Less than 1","1 to 2","3 to 5","More than 5"] });
module.exports.push(
{
  slug: "ic-qa-automation-engineer", inCall: true, ref: "Job A",
  title: "QA Automation Engineer",
  location: "Remote, United States", type: "Full time",
  salary: "$100,000 to $130,000 USD per year",
  summary: "Join our web product team to build fast, reliable end to end and API test automation in TypeScript and keep quality high in every release.",
  responsibilities: [
    "Design, build and maintain end to end UI tests with Playwright and TypeScript",
    "Maintain our legacy Cypress component and regression suites while we migrate to Playwright",
    "Write REST API tests and collections in Postman and validate JSON responses and status codes",
    "Run automated suites on every pull request with GitHub Actions and keep the pipeline green",
    "Log, triage and track defects in Jira and take part in Agile ceremonies like sprint planning and retros",
    "Partner with developers and product managers to define acceptance criteria and test coverage"
  ],
  requirements: [
    "3 or more years of QA automation experience on web applications",
    "Strong hands on experience with Playwright and TypeScript",
    "Working experience with Cypress",
    "Experience testing REST APIs with Postman",
    "Experience setting up or maintaining CI workflows in GitHub Actions",
    "Comfortable working in an Agile Scrum team using Jira"
  ],
  niceToHave: [
    "Experience with visual regression testing",
    "Familiarity with accessibility testing using axe",
    "Experience with Node.js and npm package management",
    "ISTQB Foundation certification"
  ],
  tools: ["Playwright","TypeScript","Cypress","Postman","REST API testing","GitHub Actions","Jira","Agile Scrum"],
  questions: [yrs2("Playwright and TypeScript"), auth]
},
{
  slug: "ic-sdet", inCall: true, ref: "Job B",
  title: "SDET, Software Development Engineer in Test",
  location: "Remote, United States", type: "Full time",
  salary: "$125,000 to $155,000 USD per year",
  summary: "Own our Java based test framework for web, mobile and backend services, and build the test infrastructure that runs in Jenkins, Docker and AWS.",
  responsibilities: [
    "Build and extend our Java test automation framework with Selenium WebDriver and TestNG",
    "Write backend API tests with REST Assured and validate data with SQL queries against PostgreSQL",
    "Automate Android and iOS mobile tests with Appium",
    "Manage builds and dependencies with Maven and run nightly regression in Jenkins pipelines",
    "Run tests in Docker containers and on AWS services such as EC2 and S3",
    "Review code from developers and push for testable design and good unit test coverage"
  ],
  requirements: [
    "5 or more years of software testing experience, with at least 3 years writing automation in Java",
    "Strong experience with Selenium WebDriver and TestNG",
    "Experience testing REST services with REST Assured",
    "Hands on Appium experience on Android or iOS",
    "Experience with Maven builds and Jenkins pipelines",
    "Working knowledge of Docker, AWS and SQL"
  ],
  niceToHave: [
    "Experience with Selenium Grid or cloud device farms",
    "Familiarity with Kafka or other message queues",
    "Experience with performance testing in Gatling",
    "AWS Cloud Practitioner certification"
  ],
  tools: ["Java","Selenium WebDriver","TestNG","REST Assured","Maven","Jenkins","Docker","AWS","SQL","Appium"],
  questions: [yrs2("Java and Selenium WebDriver"), auth]
});
