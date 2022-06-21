export interface IToast {
  id: string;
  content: string;
  duration?: number;
  copyWith(options?: Partial<IToast>): Toast;
}

export default class Toast implements IToast {
  constructor(
    readonly id: string,
    readonly content: string,
    readonly duration?: number,
  ) {}

  copyWith(options?: Partial<IToast>): Toast {
    return new Toast(
      options?.id ?? this.id,
      options?.content ?? this.content,
      options?.duration ?? this.duration,
    );
  }
}
