export interface IResource {
  id: string;
  type: ResourceType;
  title: string;
  source?: string;
  copyWith(options?: Partial<IResource>): Resource;
}

export type ResourceType = 'url' | 'image';

export default class Resource implements IResource {
  constructor(
    readonly id: string,
    readonly type: 'url' | 'image',
    readonly title: string,
    readonly source: string,
  ) {}

  copyWith(options?: Partial<IResource>): Resource {
    return new Resource(
      options?.id ?? this.id,
      options?.type ?? this.type,
      options?.title ?? this.title,
      options?.source ?? this.source,
    );
  }
}
