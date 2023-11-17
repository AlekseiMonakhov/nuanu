import { clamp } from '@anton.bobrov/vevet-init';

interface IStep {
  top: number;
  left: number;
  width: number;
  height: number;
}

type TItem = {
  desktop: IStep;
  phone: IStep;
}[];

const sizeMap: TItem[] = [
  [
    /// 0
    {
      desktop: { top: 221, left: -149, width: 610, height: 564 },
      phone: { top: 59, left: 15, width: 180, height: 165 },
    },
    {
      desktop: { top: 340, left: -81, width: 354, height: 330 },
      phone: { top: 74, left: 15, width: 119, height: 104 },
    },
    {
      desktop: { top: 366, left: -18, width: 326, height: 304 },
      phone: { top: 59, left: 16, width: 90, height: 82 },
    },
  ],
  /// 1
  [
    {
      desktop: { top: 372, left: 1282, width: 502, height: 381 },
      phone: { top: 464, left: 180, width: 198, height: 214 },
    },
    {
      desktop: { top: 390, left: 1392, width: 369, height: 280 },
      phone: { top: 565, left: 270, width: 105, height: 114 },
    },
    {
      desktop: { top: 365, left: 1426, width: 276, height: 209 },
      phone: { top: 486, left: 285, width: 94, height: 102 },
    },
  ],
  /// 2
  [
    {
      desktop: { top: 749, left: 129, width: 379, height: 289 },
      phone: { top: 544, left: 41, width: 124, height: 94 },
    },
    {
      desktop: { top: 582, left: 119, width: 514, height: 392 },
      phone: { top: 479, left: 52, width: 206, height: 155 },
    },
    {
      desktop: { top: 632, left: 119, width: 319, height: 243 },
      phone: { top: 545, left: 225, width: 113, height: 86 },
    },
  ],
  /// 3
  [
    {
      desktop: { top: 166, left: 1226, width: 337, height: 257 },
      phone: { top: 82, left: 225, width: 96, height: 85 },
    },
    {
      desktop: { top: 134, left: 1183, width: 446, height: 340 },
      phone: { top: 54, left: 154, width: 176, height: 155 },
    },
    {
      desktop: { top: 134, left: 1250, width: 379, height: 289 },
      phone: { top: 116, left: 75, width: 86, height: 75 },
    },
  ],
  /// 4
  [
    {
      desktop: { top: 150, left: 579, width: 225, height: 171 },
      phone: { top: 156, left: 278, width: 100, height: 88 },
    },
    {
      desktop: { top: 150, left: 579, width: 263, height: 200 },
      phone: { top: 168, left: 292, width: 72, height: 64 },
    },
    {
      desktop: { top: 135, left: 406, width: 333, height: 253 },
      phone: { top: 74, left: 186, width: 178, height: 158 },
    },
  ],
  /// 4
  [
    {
      desktop: { top: 844, left: 850, width: 225, height: 171 },
      phone: { top: 435, left: 15, width: 68, height: 93 },
    },
    {
      desktop: { top: 867, left: 804, width: 271, height: 206 },
      phone: { top: 424, left: 15, width: 73, height: 100 },
    },
    {
      desktop: { top: 684, left: 640, width: 530, height: 403 },
      phone: { top: 419, left: 15, width: 187, height: 255 },
    },
  ],
];

const objToCssVars = (object: Record<string, any>, prefix: string) => {
  const entries = Object.keys(object).map((key) => [
    `--${prefix}-${key}`,
    object[key],
  ]);

  return Object.fromEntries(entries);
};

const getStepTransform = (start: IStep, end: IStep) => {
  const scaleX = end.width / start.width;
  const scaleY = end.height / start.height;

  return {
    ...end,
    'scale-x': scaleX,
    'scale-y': scaleY,
    x:
      (end.width - start.width) / 2 / scaleX + (end.left - start.left) / scaleX,
    y:
      (end.height - start.height) / 2 / scaleY + (end.top - start.top) / scaleY,
  };
};

export function getSizeMapStyles(index: number, step: number) {
  const item = sizeMap[index];

  if (!item) {
    return undefined;
  }

  const start = item[0];
  const end = item[clamp(step, [0, item.length - 1])];

  return {
    ...objToCssVars(getStepTransform(start.desktop, end.desktop), 'desktop'),
    ...objToCssVars(start.desktop, 'desktop'),
    ...objToCssVars(end.desktop, 'desktop-scale'),

    ...objToCssVars(getStepTransform(start.phone, end.phone), 'phone'),
    ...objToCssVars(start.phone, 'phone'),
    ...objToCssVars(end.phone, 'phone-scale'),
  };
}
