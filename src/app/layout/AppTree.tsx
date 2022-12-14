import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { VscMarkdown } from 'react-icons/vsc';

interface Page {
  index: number;
  name: string;
  route: string;
  icon: JSX.Element;
}

interface Props {
  pages: {
    index: number;
    name: string;
    route: string;
    icon: JSX.Element;
  }[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  currentComponent: string;
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
  visiblePageIndexs: number[];
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function AppTree({
  pages,
  selectedIndex,
  setSelectedIndex,
  currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
}: Props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const { pathname } = useLocation();

  const page: Page = pages.find((x) => x.route === pathname)!;

  useEffect(() => {
    if (page) {
      setSelectedIndex(page.index);
    }
  }, [page, setSelectedIndex]);

  function renderTreeItemBgColor(index: number) {
    if (theme.palette.mode === 'dark') {
      return selectedIndex === index ? 'rgba(144,202,249,0.16)' : '#252527';
    }
    return selectedIndex === index ? '#295fbf' : '#f3f3f3';
  }

  function renderTreeItemColor(index: number) {
    if (theme.palette.mode === 'dark') {
      return selectedIndex === index && currentComponent === 'tree'
        ? 'white'
        : '#bdc3cf';
    }
    return selectedIndex === index ? '#e2ffff' : '#69665f';
  }

  const toProperCase = (label: string) => {
    return label.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ minWidth: 220 }}
      defaultExpanded={['-1']}
    >
      <TreeItem
        nodeId="-1"
        label="Home"
        color="#bdc3cf"
        onClick={() => {
          navigate('/');
          setSelectedIndex(-1);
        }}
      >
        {pages.map(({ index, name, route, icon }) => (
          <TreeItem
            key={index}
            nodeId={index.toString()}
            label={toProperCase(name)}
            sx={{
              color: renderTreeItemColor(index),
              backgroundColor: renderTreeItemBgColor(index),
              '&& .Mui-selected': {
                backgroundColor: renderTreeItemBgColor(index),
              },
            }}
            icon={icon || <VscMarkdown color="#6997d5" />}
            onClick={() => {
              if (!visiblePageIndexs.includes(index)) {
                const newIndexs = [...visiblePageIndexs, index];
                setVisiblePageIndexs(newIndexs);
              }
              navigate(route);
              setSelectedIndex(index);
              setCurrentComponent('tree');
            }}
          />
        ))}
      </TreeItem>
    </TreeView>
  );
}
