class Freelancer extends WorkingPerson {
  projects = [];
  constructor(name, surname) {
    super(name, surname);
  }

  /**
   * Adds a job to freelanrers job list
   * @param job - instance of Job
   */
  addProject(job) {
    // patikrinti ar darbas sukurtas pagal JOB klase
    if (job instanceof Job) {
      this.projects.push(job);
    } else {
      throw new Error('Not valid job');
    }
  }

  finishProject(job) {
    if (job instanceof Job) {
      // pabaigti darba
      job.completeJob();
    } else {
      throw new Error('Not valid job');
    }
  }

  calcPay() {
    // surasti visus pabaigtus darbus
    // sudeti pabaigtu darbu kainas
    // istrinti pabaigtus is projects masyvo
    // grazinti moketina suma
  }
}
