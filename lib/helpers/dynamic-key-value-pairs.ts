/**
 * @description
 * Generates object key names with intellisence support
 * @param keys
 * @param namespace
 * @examples
 * dynamicKeyValuePairs({ keys:[ 'USER_REQUESTED', 'USER_SUCCESS', 'USER_FAILURE'], namespace: 'user' }),
 * dynamicKeyValuePairs({keys: [ 'USER_REQUESTED', 'USER_SUCCESS', 'USER_FAILURE'] }),
 *
 * IMPORTANT: if provided, namespace prop is suppose to be **string literal** and not a run time calculated string
 */
function dynamicKeyValuePairs<
  T extends string,
  NS extends string | undefined = undefined
>({
  keys,
  namespace,
}: {
  keys: T[];
  namespace?: NS;
}): { [K in T]: NS extends undefined ? K : `${NS}/${K}` } {
  const namespacePrefix: string = namespace ? `${namespace}/` : '';

  return keys.reduce((acc, key) => {
    acc[key] = `${namespacePrefix}${key}`;
    return acc;
  }, Object.create(null));
}

export default dynamicKeyValuePairs;
