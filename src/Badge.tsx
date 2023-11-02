import type { EventValueOrEventCallback } from '@public-ui/components/dist/types/types/callbacks';
import { KolBadge } from '@public-ui/react';
import type { HTMLAttributes } from 'react';
import { useCallback } from 'react';

const badgeBgVariants = {
  white: '#ff0', // '#ffffff',
  grey: '#f00', // '#e5e8e9',
  green: '#cfdeda',
  blue: '#cce4f0',
  violet: '#dfd6de',
  red: '#f2ccd8',
  orange: '#f5dcd7',
  yellow: '#fdf3b0',
} as const;

const badgeTextVariants = {
  white: 'blue', // '#545A5C',
  grey: '#f00', // '#454D4F',
  green: '#004D38',
  blue: '#004B76',
  violet: '#3F1D4A',
  red: '#7A2E1F',
  orange: '#780F2D',
  yellow: '#6A4A06',
} as const;

export type BadgeProps = {
  /** Die string variante des Inhalt des Badges. Relevant für die Barrierefreiheit. */
  label: string;
  /** Wenn dieser Handler gesetzt ist wird ein Schließen Button gerendert. Wenn dieser Button aktiviert wird, wird dieser Handler aufgerufen. */
  onClose?: () => void;
  /** Hiermit können die verschieden Farbvarianten des Badges gesetzt werden. Standardmäßig ist `grey` gesetzt. */
  variant?: keyof typeof badgeBgVariants;
};

export default function Badge({
  label,
  onClose,
  variant = 'grey',
}: BadgeProps & HTMLAttributes<HTMLDivElement>) {
  const onClickClose = useCallback<
    EventValueOrEventCallback<MouseEvent, unknown>
  >(
    (event: MouseEvent) => {
      onClose?.();
      event.stopPropagation();
    },
    [onClose]
  );

  return (
    <div className="flex gap-2 items-center justify-center">
      <span
        className="block w-8 h-8"
        style={{
          backgroundColor: badgeBgVariants[variant],
        }}
      ></span>
      <span
        className="block w-8 h-8"
        style={{
          backgroundColor: badgeTextVariants[variant],
        }}
      ></span>
      <KolBadge
        _label={label}
        _color={{
          backgroundColor: badgeBgVariants[variant],
          foregroundColor: badgeTextVariants[variant],
          color: badgeTextVariants[variant],
        }}
        _smartButton={
          onClose
            ? {
                _label: `Entferne ${label}`,
                _on: { onClick: onClickClose },
                _icon: 'fas fa-times',
              }
            : undefined
        }
      />
    </div>
  );
}
