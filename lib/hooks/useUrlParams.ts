'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import * as R from 'remeda';

export const useUrlParams = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const { push } = useRouter();

  const setSearchParams = useCallback(
    (callback: (prev: URLSearchParams) => URLSearchParams) =>
      R.pipe(
        params,
        callback,
        (newParams) => newParams.toString(),
        (stringifiedParams) =>
          R.pipe(
            [pathname, stringifiedParams],
            ([path, params]) => `${path}?${params}`,
            push,
          ),
      ),
    [params, pathname, push],
  );

  return [params, setSearchParams] as const;
};
