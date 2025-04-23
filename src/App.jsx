import Text from "./components/text";
import Button from "./components/button";
import Icon from "./components/icon";
import Skeleton from "./components/skeleton";
import InputCheckbox from "./components/input-checkbox";
import InputText from "./components/input-text";
import Badge from "./components/badge";
import Logo from "./assets/images/logo.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import ButtonIcon from "./components/button-icon";
import Card from "./components/card";
import Container from "./components/container";

export default function App() {
  return (
    <Container className="grid gap-4 p-4">
      <div className="grid gap-2">
        <Text type="body-sm-bold">Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text type="body-md-bold">Olá Mundo</Text>
      </div>

      <div>
        <Logo />
      </div>

      <div className="flex gap-2">
        <Icon svg={PlusIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={TrashIcon} />
        <Icon svg={XIcon} />
        <Icon svg={CheckIcon} />
        <Icon svg={SpinnerIcon} className="animate-spin" />
      </div>

      <div className="flex gap-2">
        <ButtonIcon type="primary" icon={TrashIcon} />
        <ButtonIcon type="secondary" icon={TrashIcon} />
        <ButtonIcon type="tertiary" icon={TrashIcon} />
      </div>

      <div>
        <Button type="primary" icon={PlusIcon}>
          Nova Tarefa
        </Button>
      </div>

      <div className="space-y-2">
        <Skeleton className="w-full h-14" />
        <Skeleton className="w-20 h-14" />
      </div>

      <div>
        <InputText />
      </div>

      <div>
        <InputCheckbox />
      </div>

      <div className="flex gap-2">
        <Badge type="secondary">5</Badge>
        <Badge type="primary">2 de 5</Badge>
      </div>

      <div>
        <Card size="lg">
          <Text type="body-md-bold">Tarefa</Text>
        </Card>
      </div>
    </Container>
  );
}
