import { stylesVar } from '../../stylesVar'

export const styles = {
	link: {
    margin: stylesVar.defaultMargin,
    padding: stylesVar.defaultPadding,
    borderRadius: stylesVar.defaultBorderRadius,
    textDecoration: 'none',
    letterSpacing: stylesVar.defaultLetterSpacing,
    color: 'black',
  },
  active: {
    backgroundColor: stylesVar.primaryColor,
    color: 'white',
  }
}
