import { IBaseValidation } from '@/lib/types/validations/base';

export interface IYHelpConstructionMachineValidation extends IBaseValidation {
  city: string;
  info?: string | null;
  term: boolean;
  phone?: string;
}
