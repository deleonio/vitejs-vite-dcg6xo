import { setState } from '@public-ui/components/dist/types/utils/prop.validators';
import { KolButton, KolCard, KolModal } from '@public-ui/react';
import { FC, createRef, useState } from 'react';

export const Modal: FC = () => {
  const [ref, setRef] = useState<HTMLElement | null>(null);

  return (
    <>
      <KolButton
        _label="Modal öffnen"
        _on={{
          onClick: (event: Event) => {
            setRef(event.target as HTMLElement);
          },
        }}
      />
      <KolModal _label="Modal" _activeElement={ref} _width="50%">
        <KolCard>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <KolButton
            _label="Modal schließen"
            _on={{
              onClick: () => setRef(null),
            }}
          />
        </KolCard>
      </KolModal>
    </>
  );
};
