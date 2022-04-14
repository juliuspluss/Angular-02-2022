import { Injectable } from '@angular/core';
import { Packet } from '../packet/packet.model';

@Injectable({
  providedIn: 'root'
})
export class PacketService {
  private packets = [
    {title: "mini_mobile", category: "mobile", price: "5"},
    {title: "medium_mobile", category: "mobile", price: "10"},
    {title: "large_mobile", category: "mobile", price: "15"},
    {title: "family_mobile", category: "mobile", price: "20"},
    {title: "mini_television", category: "television", price: "5"},
    {title: "medium_television", category: "television", price: "10"},
    {title: "large_television", category: "television", price: "15"},
    {title: "family_television", category: "television", price: "20"},
    {title: "mini_internet", category: "internet", price: "5"},
    {title: "medium_internet", category: "internet", price: "10"},
    {title: "large_internet", category: "internet", price: "15"},
    {title: "family_internet", category: "internet", price: "20"}
  ];

  constructor() { }

  getAllPackets(): Packet[] {
    return this.packets.slice();
  }

  getCertainPackets(filteredCategory: string): Packet[] {
    return this.packets.filter(packet => packet.category == filteredCategory);
  }

}
