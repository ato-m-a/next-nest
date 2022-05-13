export interface EmitData {
  key: string;
  value: { [key: string]: any | { [key: string]: any } };
}

export interface Props {
  propsData: {
    [key: string]: any | { [key: string]: any };
  },
  emit: (emit: EmitData) => void;
}