export const validator = (value) => {
  const isInvalid = parseInt(value) === 0 || value === null || value === '' || value === undefined || value === {} || value || []
  return isInvalid === false
}
