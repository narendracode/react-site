---
title: Superfast CI,CD using Docker, TravisCI and DigitalOcean
date: "2017-12-23T20:15:32.169Z"
layout: post
path: "/blog/superfast-CI-CD-using-docker-travisci-and-digitalocean/"
categories:
  - devops
tags:
  - digitalocean
  - ci
  - cd
  - docker
  - travisci

description: Continuous integration focuses on integrating work from individual developers into a main repository multiple times a day to catch integration bugs early and accelerate collaborative development. Continuous delivery is concerned with reducing friction in the deployment or release process, automating the steps required to deploy a build so that code can be released safely at any time. Continuous deployment takes this one step further by automatically deploying each time a code change is made. In this guide, we will discuss each of these strategies and how we can achieve CI, CD using tools such as <a href="http://github.com" target="_blank"> Github </a>, <a href="https://www.docker.com" target="_blank">Docker</a>,<a href="https://travis-ci.org" target="_blank"> TravisCI</a>, <a href="https://cloud.docker.com" target="_blank">Docker Cloud</a> and <a href="https://www.digitalocean.com" target="_blank">DigitalOcean</a>.
---
In this guide, i will be taking you through the complete process of setting up CI,CD using <a href="http://github.com" target="_blank"> Github </a>, <a href="https://www.docker.com" target="_blank">Docker</a>, <a href="https://travis-ci.org" target="_blank"> TravisCI</a>, <a href="https://cloud.docker.com" target="_blank">Docker Cloud</a> and <a href="https://www.digitalocean.com" target="_blank">DigitalOcean</a>.
If you are not familiar with CI/CD then i highly encourage you to please go through <a href="https://www.digitalocean.com/community/tutorials/an-introduction-to-continuous-integration-delivery-and-deployment" target="_blank">this</a> article. Once you have basic idea about CI/CD and you will follow all the steps correctly then i am confident that you will be successful in automating your build and deployment process.

I am assuming that you have accounts in <a href="http://github.com" target="_blank"> Github </a>, <a href="https://travis-ci.org" target="_blank"> TravisCI</a>, <a href="https://cloud.docker.com" target="_blank">Docker Cloud</a> and <a href="https://www.digitalocean.com" target="_blank">DigitalOcean</a>. In case you don't have accounts yet then please create one. I am using **DigitalOcean** for running docker nodes and services. DigitalOcean offers all the necessary services at reasonable price for running production apps. You can go with the very basic **Ubuntu 16.04.3 x64 $5/mo droplet**, it will give you **512mb/1CPU 20GB SSD hard disk**, that is good enough for running your sample app.

You can follow <a href="https://www.wikihow.com/Create-an-Account-on-GitHub" target="_blank">these steps</a> to create an account in **Github**.

**Travis CI** is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub. Open source projects may be tested at no charge via https://travis-ci.org . 


![alt text](/images/ci-cd.png "CI/CD")

In this guide I am using my <a href="https://github.com/narendrasoni1989/react-site" target="_blank">sample portfolio project </a>hosted in Github. It is developed using revolutionary high performance site generator framework <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJs</a>. It's an amazing platform to build application. It is based on <a href="https://jamstack.org/" target="_blank">JAMStack</a>. Do checkout if you are interested to build your portfolio. Feel free to use my source code if you are interested. Please follow the <a href="https://www.gatsbyjs.org/docs/" target="_blank">docs</a> to get started with Gatsbyjs and build the project. 

![alt text](/images/github-reactsite.png "Github react-site")



After you build this sample project, a public folder is created that contains the static files. I am using **Apache Web server** in **DigitalOcean Ubuntu Droplet** to host my project and we are going to automate the testing, build, integration and deployment.

If you want to learn hosting projects in Apache2 server then please follow this <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-14-04-lts" target="_blank">link</a>.

# Steps to setup CI, CD
------------------------

## Step 1 : Docker
Docker is a container management service. The keywords of Docker are **develop, ship and run anywhere**. The whole idea of Docker is for developers to easily develop applications, ship them into containers which can then be deployed anywhere. Docker has the ability to reduce the size of development by providing a smaller footprint of the operating system via containers.
With containers, it becomes easier for teams across different units such as Development, QA and Operations to work seamlessly across applications. Docker containers are pretty lightweight, they are very easily scalable.

![alt text](/images/docker.png "Docker")

Please follow the official <a href="https://docs.docker.com/engine/installation/" target="_blank">docs</a> to install docker.



In our project we are using <a href="https://docs.docker.com/engine/reference/builder/" target="_blank">Dockerfile</a> to build **Docker** images.

Docker can build images automatically by reading the instructions from a **Dockerfile**. A Dockerfile is a text document that contains all the commands that a user can run on the command line to assemble an image. Using docker users can create an automated build that executes several command-line instructions in succession.

Dockerfile used in this project is very simple and self explanatory. I am using <a href="https://docs.docker.com/engine/reference/builder/#run" target="_blank">RUN</a>, <a href="https://docs.docker.com/engine/reference/builder/#add" target="_blank">ADD</a>, <a href="https://docs.docker.com/engine/reference/builder/#copy" target="_blank">COPY</a> commands to initialize image.

Please note, if you want to keep any data persistent then you must use <a href="https://docs.docker.com/engine/reference/builder/#volume" target="_blank">VOLUME</a>. The **VOLUME** instruction creates a mount point with the specified name and marks it as holding externally mounted volumes from native host or other containers

You can build docker images locally using

`docker build --tag narendrasoni1989/react-site .`



After docker image is built successfully, you can see it in the list by running `docker images` in your terminal. 

To see the list of running docker images, use `docker ps`

You can even push docker image from your local to docker hub.

`docker push narendrasoni1989/react-site'`

`docker push` command can be used only if you are logged in using command `docker login`.


## Step 2 : TravisCI
In the previous step, we have built docker image.For complex applications it is not feasible to build images manually everytime. Fortunately we have solution to automate our build process. In this tutorial we are using **TravisCI**, which is very easy to setup. All you need is a `.travis.yml` file and link your project in Github with TravisCI dashboard. If you make any changes in Github repository master branch, commit and push source code. TravisCI gets notified and triggers build processing using `.travis.yml` configuration file. Your `.travis.yml` file can vary from simple to complex depending on your usecase. 

![alt text](/images/travisci.png "TravisCi")

In our project we are using a very simple `.travis.yml` configuration file. It is using Ubuntu distribution. On start of build process it installs **docker**, **nodejs**, and runs sample unit test. If test is successful then it runs some `after_success` script i.e. `docker login`, `docker build` and `docker push`.
Feel free to customise `.travis.yml` file as per your usecase. You can use environment variables to be used in .travis.yml, so that you don't have to hardcode and push credentials to your repository. 



![alt text](/images/travis-dashboard.png "TravisCi")

In the TravisCI portal, make sure you switch on the repository to be hooked with Github; so that it can listen the change in repository.

# Step 3 : Docker Cloud
<a href="https://docs.docker.com/docker-cloud/" target="_blank">Docker Cloud</a> provides a hosted registry service with build and testing facilities for Dockerized application images; tools to help you set up and manage host infrastructure; and application lifecycle features to automate deploying (and redeploying) services created from images.

![alt text](/images/docker-cloud.png "Docker Cloud")

So far we have automated the build process. Next task is to automate deployment. Are you doing good so far?

Before we move forward i will introduce you with some of the key terms that you will be hearing in this section.

> **Node**
> - A node is an individual Linux host used to deploy and run your applications. Docker Cloud does not provide hosting services, so all of your applications, services, and containers run on your own hosts. Your hosts can come from several different sources, including physical servers, virtual machines or cloud providers.


> **Node Cluster**
> - When launching a node from a cloud provider you’ll actually be creating a node cluster. Node Clusters are groups of nodes of the same type and from the same cloud provider. Node clusters allow you to scale the infrastructure by provisioning more nodes with a drag of a slider.

> **Service**
> - Services are logical groups of containers from the same image. Services make it simple to scale your application across different nodes. In Docker Cloud you drag a slider to increase or decrease the availability, performance, and redundancy of the application. Services can also be linked one to another even if they are deployed on different nodes, regions, or even cloud providers.

Before you can do anything with your images, you need somewhere to run them. **Docker Cloud** allows you to link to your infrastructure or cloud services provider so you can provision new nodes automatically. Once you have nodes set up, you can deploy images directly from Docker Cloud repositories.

Next what we need to do is link our cloud service provider <a href="https://www.digitalocean.com" target="_blank">DigitalOcean</a> with Docker Cloud. Please follow this <a href="https://docs.docker.com/docker-cloud/infrastructure/link-do/" target="_blank">offical documentation </a> to learn about linking Digitalocean.
**You will be getting 20$ credit as a bonus :)** if you do so.


When you deploy a web service to multiple containers, you might want to load balance between the containers using a proxy or load balancer.

In this tutorial, you’ll use the `narendrasoni1989/react-site` image in docker cloud repository as a sample web service and dockercloud/haproxy to load balance traffic to the service. 



Login to docker cloud, you will see docker image in your repository if your TravisCI build was successfull. We will be using only the image with tag `latest` for all our deployments.

## Create a node cluster
1. Click `Node Clusters` in the left-hand navigation menu.
2. Click `Create`.
3. Enter a name for the node cluster, select the ****Provider**, **Region**, and **Type/Size**.
4. Add a deployment tag of `webexpressive`. (This is used to make sure the right services are deployed to the correct nodes.)
5. Drag or increment the Number of nodes slider to 1. If you increase it to more than 1 then you have to link your credit card and charges may apply so please keep it 1 if you are only doing it for learning.

![alt text](/images/docker-cloud-dashboard-cluster.png "Docker Cloud")


**Node Cluster** takes about 5 minutes to deployed. You can check the timeline. After Cluster is successfully deployed you can check the details by clicking on the webexpressive cluster.

![alt text](/images/docker-cloud-dashboard-cluster1.png "Docker Cloud")


## Launch the web service
1. Click Services in the left hand menu, and click Create.
2. Click the `my repositories` icon at the top of page, and select the **narendrasoni1989/react-site** image.

![alt text](/images/docker-cloud-dashboard-service.png "Docker Cloud")

3. On the Service configuration screen, configure the service using these values:
	- **Unordered sub-listimage**: Set the tag to `latest` so you get the most recent build of the image.
	- **Service name**: `webexpressive`. This is what we call the service internally.
	- **Number of containers**: 2
	- **Deployment strategy**: `high availability`. Deploy evenly to all nodes.
	- **Deployment constraints**: `webexpressive`. Deploy only to nodes with this tag.


![alt text](/images/docker-cloud-dashboard-service1.png "Docker Cloud")

4. Enable AUTOREDEPLOY

![alt text](/images/docker-cloud-dashboard-service2.png "Docker Cloud")

5. Last, scroll down to the Ports section and make sure the published box is checked next to port 80.
	We’re going to access these containers from the public internet, and publishing the port makes them available externally. Make sure you leave the node port field unset so that it stays dynamic.

![alt text](/images/docker-cloud-dashboard-service3.png "Docker Cloud")

6. Click **Create and deploy**.
	Docker Cloud switches to the Service detail view after you create the service.

7. Scroll up to the Containers section to see the containers as they deploy.
	The icons for each container change color to indicate what phase of deployment they’re in. Once all containers are green (successfully started), continue to the next step.

![alt text](/images/docker-cloud-dashboard-service4.png "Docker Cloud")

## Test the web service
1. Once your containers are all green (running), scroll down to the Endpoints section.

	Here you’ll see a list of all the endpoints available for this service on the public internet.

![alt text](/images/docker-cloud-dashboard-service5.png "Docker Cloud")

2. Click an endpoint URL (it should look something like
	`http://webexpressive-1.fa8816e5.cont.dockerapp.io:32771`) to open a new tab in your browser.
	It should open up a webpage in your browser.

3. Click other endpoints and check the hostnames. You’ll see different hostnames which match the container name (webexpressive-2 and so on).


## Launch the load balancer

We verified that the web service is working, so now we’ll set up the load balancer.

1. Click `Services` in the left navigation bar, and click Create again.
	This time we’ll launch a load balancer that listens on port 80 and balances the traffic across the 8 containers that are running the web service. 

2. Click the `rocket icon` if necessary and find the Proxies section.

3. Click the `dockercloud/haproxy` image.

![alt text](/images/docker-cloud-dashboard-service6.png "Docker Cloud")

4. On the next screen, configure the service using these values.
	- Set the **service name** to `webexpressive-lb`.
	- Set the **nick name** to `webexpressive-lb`.
	- Set the **deployment strategy** to `High Availability`.

![alt text](/images/docker-cloud-dashboard-service7.png "Docker Cloud")

5. Set `API ROLES` to `Full access`
	When you assign the service an API role, it passes a `DOCKERCLOUD_AUTH` environment variable to the service’s containers, which allows them to query Docker Cloud’s API on your behalf. You can read more about API Roles <a href="https://docs.docker.com/docker-cloud/apps/api-roles/" target="_blank">here</a>.

	The dockercloud/haproxy image uses the API to check how many containers are in the web service we launched earlier. HAproxy then uses this information to update its configuration dynamically as the web service scales. 

6. Next, scroll down to the Ports section.

7. Click the Published checkbox next to the container port 80.

8. Click the word dynamic next to port 80, and enter 80 to set the published port to also use port 80.

![alt text](/images/docker-cloud-dashboard-service8.png "Docker Cloud")


9. Scroll down to the Links section.

10. Select `webexpressive` from the drop down list, and click the blue plus sign to add the link.

	This links the load balancing service `webexpressive-lb` with the web service `webexpressive`. The link appears in the table in the Links section.


	You’ll also notice that a new set of WEB environment variables appears in the service we’re about to launch. You can read more about service link environment variables <a href="https://docs.docker.com/docker-cloud/apps/service-links/" target="_blank">here</a>.

![alt text](/images/docker-cloud-dashboard-service9.png "Docker Cloud")


11. Click **Create and deploy** and confirm that the service launches.

## Test the load-balanced web service

1. On the load balancer service detail page, scroll down to the endpoints section.

	Unlike on the web service, you’ll see that this time the HTTP URL for the load balancer is mapped to port 80.

![alt text](/images/docker-cloud-dashboard-service10.png "Docker Cloud")


2. Click the endpoint URL to open it in a new tab.

	You’ll see the same  webpage you saw earlier. Make note of the hostname.

3. Refresh the web page.

	With each refresh, the hostname changes as the requests are load-balanced to different containers.

	Each container in the web service has a different hostname, which appears in the webpage as `container_name-#`. When you refresh the page, the load balancer routes the request to a new host and the displayed hostname changes.

Congratulations! You just deployed a load balanced web service using Docker Cloud!


# Further reading
------------------
You did a great job. Continue reading the <a href="https://docs.docker.com/" target="_blank">official docs</a>, it is very well documented. We have only scratched the surface so far. You will encounter many more complex cases in real world scenario. This is good start, having this knowledge is going to help you. I encourage you to keep moving forward.

Next i would like recommend you to explore is **load balancing the load balancer**. What if you had so many `webexpressive` containers that you needed more than one `webexpressive-lb` container?

Docker Cloud automatically assigns a DNS endpoint to all services. This endpoint routes to all of the containers of that service. You can use the DNS endpoint to load balance your load balancer. To learn more, read up on <a href="https://docs.docker.com/docker-cloud/apps/service-links/" target="_blank">service links </a>.

I highly recommend you to learn the powerful container orchestration technologies such as <a href="https://docs.docker.com/engine/swarm/" target="_blank">Docker Swarm</a> and <a href="https://kubernetes.io/" target="_blank">Kubernetes</a> 