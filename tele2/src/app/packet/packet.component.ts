import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacketService } from '../services/packet.service';
import { Packet } from './packet.model';

@Component({
  selector: 'app-packet',
  templateUrl: './packet.component.html',
  styleUrls: ['./packet.component.css']
})
export class PacketComponent implements OnInit {
  packets: Packet[] = [];
  selectedCategory!: string;

  constructor(private packetService: PacketService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.packets = this.packetService.packets;
    let urlCategory = this.route.snapshot.paramMap.get("id");
    if (urlCategory) {
      this.selectedCategory = urlCategory;
      if (urlCategory == 'all') {
        this.packets = this.packetService.getAllPackets();
      } else {
      this.packets = this.packetService.getCertainPackets(urlCategory);
      }
    }
  }

}
