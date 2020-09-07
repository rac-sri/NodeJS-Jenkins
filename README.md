<div align="center"><h2>Node + Jenkins Integration Demo</h2></div>

---

### Setup

- Fork the repo.
- Install vagrant.
- You can use the vagrant configuration provided to get started.
- Create two VM, master node and slave node. Create a ssh tunnel from master to slave.
- Install Jenkins on the master node with recommended plugins. [Details](https://www.jenkins.io/doc/book/installing/)
- Install docker and node on the slave machine.
- Install Github plugin, Github Pull Plugin, Build Pipeline Plugin, Docker Pipeline, Docker Plugin, Schedule Build Plugin
- Create a pipeline project. Choose pipline as scm and add the git configuration.
- Configure the jenkins global configuration, add Github Server ( api key from github (allow repo_hook, repo)), test connection, and also add Github details in Github Pull Request Builder similarly.
- In Project (pipeline) configuration, credentials already set in global configuration, choose one. In Admin list: enter you username.
