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
