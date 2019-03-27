import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobFilter'
})
export class JobFilterPipe implements PipeTransform {

  transform(jobs: any[], checkSeach: any) {
    console.log("je suis la")
    if (!jobs || !checkSeach){
      return jobs;
    }
    return jobs.filter(job => { 
      return job.filter(job.time_job == checkSeach) 
    })
  }
  

}
