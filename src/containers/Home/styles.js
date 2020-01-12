import {StyleSheet} from "react-native";
import {verticalScale, scale, moderateScale} from '../../utils/Scale';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkWhite,
  },
  SubHeader: {
    marginVertical: verticalScale(15),
    marginHorizontal: scale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subHeaderSpacing: {
    marginHorizontal: 20,
    paddingVertical: verticalScale(10),
  },
  searchInput: {fontSize: scale(15)},
  SearchIcon: {
    width: 25,
    height: 25,
    color: Colors.white,
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    zIndex: 100,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: Colors.blue,
    borderRadius: 50,
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  fabImage: {
    width: 21,
    height: 21,
    alignSelf: 'center',
  },
  siteRenderItems: {
    backgroundColor: Colors.white,
    marginHorizontal: scale(15),
    elevation: 12,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: scale(6),
    borderRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    marginVertical: verticalScale(5),
  },
  siteName: {
    top: 10,
    left: 10,
    marginBottom: verticalScale(20),
    alignSelf: 'flex-start',
  },
  siteTitle: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: scale(15),
    justifyContent: 'space-around',
  },
  siteTitler: {
    fontSize: scale(18),
    textAlign: 'right',
    fontWeight: '600',
    color: Colors.blue,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(5),
  },
  siteCopier: {
    flexDirection: 'column',
    flexDirection: 'row',
    alignItems: 'center',
  },
  siteCopierIcon: {width: 20, height: 20, marginRight: scale(4)},
  siteCopyTitle: {
    fontSize: scale(12),
    textAlign: 'right',
    fontWeight: '400',
    color: Colors.blue,
  },
  siteUrl: {backgroundColor: Colors.darkWhite},
  siteList: {
    flex: 1,
    backgroundColor: Colors.darkWhite,
    marginTop: verticalScale(3),
  },
  siteUrlTitle: {
    textAlign: 'center',
    fontSize: scale(16),
    marginVertical: verticalScale(10),
  },
});

export default styles;