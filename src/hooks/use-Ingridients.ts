
import { Api } from '@/services/api-client';
import { Ingridient } from '@prisma/client';

import {useEffect, useState} from 'react';
import { useSet } from 'react-use';

interface ReturnProps {
  ingridients: Ingridient[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useIngridients = ():ReturnProps => {
  const [ingridients, setIngridients] = useState<Ingridient[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedIds, {toggle}] = useSet<string>(new Set([]))

  useEffect(() => {
    async function fetchIngridients() {
      try {
        setLoading(true);
        const ingridients = await Api.ingridients.getAll();
        setIngridients(ingridients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngridients();
  }, []);

  return {
    ingridients,
    loading,
    onAddId: toggle, selectedIds
  };
};
