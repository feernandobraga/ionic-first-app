import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Observable } from 'rxjs';
import { Activity } from '../types';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { ActivityVideoPage } from '../activity-video/activity-video.page';

@Component({
  selector: "app-activity-detail",
  templateUrl: "./activity-detail.page.html",
  styleUrls: ["./activity-detail.page.scss"],
})
export class ActivityDetailPage implements OnInit {
  activityDetail: Observable<Activity>;
  hasLoadedContent: Boolean;

  constructor(
    private _modalController: ModalController,
    activityService: ActivityService,
    activatedRoute: ActivatedRoute
  ) {
    this.hasLoadedContent = false;

    const activityID = activatedRoute.snapshot.params["activityID"];

    setTimeout(() => {
      this.activityDetail = activityService.getActivity(activityID);
      this.hasLoadedContent = true;
    }, 1500);
  }

  ngOnInit() {}

  async openModal() {

    const videoModal = await this._modalController.create({
      component: ActivityVideoPage
    });

    return await this.activityDetail.subscribe((activity)=> {
      videoModal.componentProps = {
        videoURL: activity.video_url
      };

      console.log("should open modal");
      return videoModal.present();
    });

    
    

  }
  
}

  
