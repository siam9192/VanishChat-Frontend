export interface IAvatar {
  id: number;
  url: string;
  status: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IRoomPhoto {
  id: string;
  url: string;
  status: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IRoom {
  id: number;
  code: string;
  name: string;
  photoId: number;
  photo: IRoomPhoto;
  members: IRoomMember[];
  joinRequests: IRoomJoinRequest[];
  messages: IMessage[];
  status: ERoomStatus;
  createdAt: Date;
  updatedAt: Date;
  isOwner?: boolean;
}

export interface IRoomMember {
  id: number;
  roomId: number;
  room: IRoom;
  userId: string;
  name?: string;
  avatarId: number;
  avatar: IAvatar;
  isAnonymous: boolean;
  role: ERoomMemberRole;
  messages: string;
  status: string;
  joinedAt: Date;
}

export interface IMessage {
  id: number;
  roomId: number;
  room: IRoom;
  memberId: number;
  member: IRoomMember;
  text: string;
  contentType: EMessageContentType;
  createdAt: Date;
  updatedAt: Date;
  isOwn:boolean
}

export interface IRoomJoinRequest {
  id: number;
  userId: string;
  roomId: number;
  room: IRoom;
  name?: string;
  isAnonymous: boolean;
  avatar: IAvatar;
  status: ERoomJoinRequestStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum EMessageContentType {
  Text = 'Text',
  Media = 'Media',
}

export enum ERoomMemberRole {
  Owner = 'Owner',
  Member = 'Member',
}

export enum RoomMemberStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export enum ERoomJoinRequestStatus {
  Pending = 'Pending',
  Approve = 'Approve',
  Declined = 'Declined',
  Canceled = 'Canceled',
  Timeout = 'Timeout',
}

enum ERoomStatus {
  Open = 'Open',
  Closed = 'Closed',
}
