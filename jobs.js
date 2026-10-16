module.exports = [
{
  slug: "qa-automation-engineer",
  title: "QA Automation Engineer",
  team: "Quality Engineering",
  location: "Remote (US or LATAM/APAC with 4h US Eastern overlap)",
  type: "Full-time",
  salary: "$95,000 – $125,000 USD / year",
  posted: "Posted 3 days ago",
  summary: "Own end-to-end and API test automation for our customer web app using Playwright and TypeScript, wired into GitHub Actions.",
  intro: "We're looking for a QA Automation Engineer to help us ship faster without breaking things. You'll own our browser and API test suites, keep our pipelines green, and partner with product engineers so quality is built in from the first pull request, not bolted on at the end.",
  responsibilities: [
    "Design, build, and maintain end-to-end test suites in Playwright with TypeScript",
    "Write API contract and regression collections in Postman and run them headless with Newman",
    "Run tests in parallel on every pull request using GitHub Actions, and keep flaky test rates under 1%",
    "Build load and performance scripts in k6 for our checkout and search services",
    "Containerize test environments with Docker so anyone can run the suite locally in one command",
    "Triage failures, file clear bug reports in Linear, and track production errors with Sentry",
    "Review pull requests for testability and coach developers on writing good tests"
  ],
  requirements: [
    "3+ years of hands-on test automation experience",
    "2+ years writing Playwright tests in TypeScript (page objects, fixtures, network mocking)",
    "Experience building or maintaining CI pipelines in GitHub Actions",
    "Solid understanding of REST APIs and testing them with Postman/Newman",
    "Comfortable with Git, Docker, and the command line",
    "Clear written English and a habit of documenting what you build"
  ],
  nice: [
    "Performance testing experience with k6",
    "Visual regression testing with Percy",
    "Experience testing a B2B SaaS product",
    "ISTQB certification"
  ],
  tools: ["Playwright","TypeScript","GitHub Actions","Postman","Newman","k6","Docker","Linear","Sentry","Percy"],
  questions: [
    { id: "years_playwright", label: "How many years of hands-on Playwright experience do you have?", type: "select", options: ["Less than 1 year","1–2 years","2–4 years","4+ years"], required: true },
    { id: "github_actions", label: "Have you built a CI pipeline from scratch in GitHub Actions?", type: "radio", options: ["Yes","No"], required: true },
    { id: "flaky_test", label: "In 2–3 sentences, how do you deal with a flaky end-to-end test?", type: "textarea", required: true }
  ]
},
{
  slug: "senior-test-engineer",
  title: "Senior Test Engineer",
  team: "Platform Quality",
  location: "Remote (Worldwide)",
  type: "Full-time",
  salary: "$120,000 – $150,000 USD / year",
  posted: "Posted 1 week ago",
  summary: "Lead our Java-based Selenium and Appium frameworks across web and mobile, with Jenkins pipelines and Jira/Xray test management.",
  intro: "Our Platform Quality team keeps our web and mobile banking-grade apps reliable for thousands of daily users. As a Senior Test Engineer you'll lead the evolution of our Java test framework, mentor two mid-level engineers, and be the voice of quality in release planning.",
  responsibilities: [
    "Own and extend our Selenium WebDriver framework written in Java, built with Maven and run with TestNG",
    "Build and maintain native mobile automation for iOS and Android with Appium",
    "Run cross-browser and real-device suites on Sauce Labs",
    "Maintain Jenkins pipelines for nightly regression and release-candidate runs",
    "Write service-level tests with REST Assured and validate data in PostgreSQL",
    "Plan and run load tests with Apache JMeter before each major release",
    "Manage test plans, coverage, and execution reporting in Jira with Xray",
    "Mentor junior testers and lead test strategy reviews"
  ],
  requirements: [
    "6+ years in software testing, with 4+ years of automation in Java",
    "Deep experience with Selenium WebDriver and TestNG (data providers, listeners, parallel runs)",
    "Hands-on Appium experience on both Android and iOS",
    "Experience owning Jenkins pipelines (Jenkinsfile, agents, plugins)",
    "Strong SQL skills and experience testing APIs with REST Assured",
    "Experience managing test cases and reporting in Jira and Xray",
    "Prior experience leading or mentoring other testers"
  ],
  nice: [
    "Performance testing with JMeter at scale",
    "Experience in fintech, payments, or other regulated industries",
    "Exposure to accessibility testing (WCAG 2.1)",
    "Experience with Cucumber/BDD in Java"
  ],
  tools: ["Selenium WebDriver","Java","TestNG","Maven","Appium","Jenkins","Sauce Labs","REST Assured","PostgreSQL","Apache JMeter","Jira","Xray"],
  questions: [
    { id: "years_selenium_java", label: "How many years have you written Selenium tests in Java?", type: "select", options: ["Less than 2 years","2–4 years","4–6 years","6+ years"], required: true },
    { id: "appium_real_devices", label: "Have you run Appium suites on real iOS and Android devices?", type: "radio", options: ["Yes, both","Android only","iOS only","No"], required: true },
    { id: "mentoring", label: "Briefly describe a time you mentored another tester or led a test strategy.", type: "textarea", required: true }
  ]
},
{
  slug: "zookeeper-engineer",
  title: "Zookeeper Engineer",
  team: "Habitat Reliability",
  location: "Remote (occasional site visit to our partner sanctuary)",
  type: "Full-time",
  salary: "$105,000 – $135,000 USD / year",
  posted: "Posted 2 days ago",
  summary: "Yes, both kinds of zookeeping. Run our Apache ZooKeeper and Kafka clusters and the IoT platform that keeps our partner sanctuary's animals fed, warm, and happy.",
  intro: "Okapi Lantern Labs powers the smart-habitat platform for the Lantern Ridge Wildlife Sanctuary. Our Zookeeper Engineer keeps two kinds of herds healthy: the Apache ZooKeeper ensemble that coordinates our event pipeline, and the 140+ enclosure sensors that tell us when the capybaras are cold or the tortoise skipped breakfast. If you've ever wanted your pager to say \"Penguin pool pH out of range\", this is the job for you.",
  responsibilities: [
    "Operate and scale our Apache ZooKeeper ensemble and Apache Kafka clusters on Kubernetes",
    "Manage all infrastructure as code with Terraform and Helm",
    "Build and maintain enclosure monitoring: temperature, humidity, and water quality sensors talking MQTT to AWS IoT Core",
    "Write Go services that automate feeding schedules and alert keepers when a meal is missed",
    "Own dashboards and alerts in Datadog, and route the urgent ones (escaped lemur, hot reptile house) through PagerDuty",
    "Maintain the Raspberry Pi edge gateways in each habitat zone",
    "Run quarterly disaster recovery drills, including \"the raccoons unplugged the gateway again\""
  ],
  requirements: [
    "4+ years in SRE, platform, or infrastructure engineering",
    "Production experience running Apache ZooKeeper and Apache Kafka",
    "Strong Terraform skills and experience running workloads on Kubernetes",
    "Experience with Datadog (monitors, dashboards, SLOs)",
    "Ability to write production services in Go",
    "Comfortable being on call, and calm when a goat chews through a sensor cable"
  ],
  nice: [
    "Experience with IoT fleets, MQTT, or AWS IoT Core",
    "Hands-on Raspberry Pi or other embedded Linux work",
    "Animal care, veterinary, or zoo volunteering experience",
    "No fear of geese"
  ],
  tools: ["Apache ZooKeeper","Apache Kafka","Terraform","Helm","Kubernetes","Datadog","PagerDuty","Go","MQTT","AWS IoT Core","Raspberry Pi"],
  questions: [
    { id: "years_zookeeper_kafka", label: "How many years have you operated Apache ZooKeeper or Kafka in production?", type: "select", options: ["None yet","Less than 2 years","2–4 years","4+ years"], required: true },
    { id: "animals", label: "Are you comfortable working near large animals during site visits?", type: "radio", options: ["Yes","Yes, except geese","No"], required: true },
    { id: "favorite_alert", label: "Write the Datadog alert title you'd create for a sloth that hasn't moved in 6 hours.", type: "textarea", required: true }
  ]
}
];
